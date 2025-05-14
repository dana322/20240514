"use client";

import { useState, useEffect } from "react";
import { pdfjs } from "react-pdf";
import dynamic from "next/dynamic";
import Button from "@/components/ui/Button";
import { PDFDocument, degrees } from "pdf-lib";
import PdfOperationButtons from "./PdfOperationButtons";
import { MIN_SCALE, MAX_SCALE } from "@/constants";
import PdfDocument from "./PdfDocument";

interface PdfOperationProps {
  pdfFile: File | null;
  setPdfFile: (file: File | null) => void;
}

// 配置 PDF.js Worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function PdfOperation({ pdfFile, setPdfFile }: PdfOperationProps) {
  const [file, setFile] = useState<string | File | null>(null);

  const [rotateArr, setRotateArr] = useState<number[]>([]);
  const [scale, setScale] = useState<number>(1);

  useEffect(() => {
    if (pdfFile) {
      const blobUrl = URL.createObjectURL(pdfFile);
      setFile(blobUrl);
    }
  }, [pdfFile]);

  const handleDownloadPDF = async () => {
    if (!pdfFile) return;

    // 1. 读取原始PDF为ArrayBuffer
    const arrayBuffer = await pdfFile.arrayBuffer();
    const srcPdf = await PDFDocument.load(arrayBuffer);

    // 2. 新建一个空PDF文档
    const newPdf = await PDFDocument.create();

    // 3. 遍历每一页，嵌入并物理旋转内容
    const srcPages = srcPdf.getPages();
    for (let i = 0; i < srcPages.length; i++) {
      const srcPage = srcPages[i];
      // 转换旋转角度：显示时的角度与保存时的角度相反
      const displayAngle = rotateArr[i] || 0;
      const saveAngle = (360 - displayAngle) % 360;
      const { width, height } = srcPage.getSize();

      // 嵌入页面内容
      const embeddedPage = await newPdf.embedPage(srcPage);

      // 新建页面，旋转90/270时宽高互换
      let newPage;
      if (saveAngle === 90 || saveAngle === 270) {
        newPage = newPdf.addPage([height, width]);
      } else {
        newPage = newPdf.addPage([width, height]);
      }

      // 计算旋转中心和平移
      let x = 0,
        y = 0;
      if (saveAngle === 90) {
        x = height;
        y = 0;
      } else if (saveAngle === 180) {
        x = width;
        y = height;
      } else if (saveAngle === 270) {
        x = 0;
        y = width;
      }

      // 物理旋转内容
      newPage.drawPage(embeddedPage, {
        x,
        y,
        rotate: degrees(saveAngle),
      });
    }

    // 4. 生成新PDF并下载
    const pdfBytes = await newPdf.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = pdfFile.name.replace(/\.pdf$/i, "_rotated.pdf");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // 旋转单页
  const handleRotate = (idx: number, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setRotateArr((prev) => {
      const next = [...prev];
      next[idx] = (next[idx] + 90) % 360;
      return next;
    });
  };

  // 旋转全部页面
  const handleRotateAll = () => {
    setRotateArr((prev) => prev.map((r) => (r + 90) % 360));
  };

  // 放大
  const handleZoomIn = () => {
    if (scale < MAX_SCALE) {
      setScale(scale + 0.1);
    }
  };

  // 缩小
  const handleZoomOut = () => {
    if (scale > MIN_SCALE) {
      setScale(scale - 0.1);
    }
  };

  // 移除PDF
  const handleRemovePDF = () => {
    setFile(null);
    setPdfFile(null);
  };

  return (
    <div className="w-full flex flex-col items-center gap-10 p-5">
      <PdfOperationButtons
        scale={scale}
        onRotateAll={handleRotateAll}
        onRemovePDF={handleRemovePDF}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
      />

      <PdfDocument
        file={file as File}
        setRotateArr={setRotateArr}
        rotateArr={rotateArr}
        scale={scale}
        handleRotate={handleRotate}
      />

      <Button type="primary" onClick={() => handleDownloadPDF()}>
        Download PDF
      </Button>
    </div>
  );
}

export default dynamic(() => Promise.resolve(PdfOperation), { ssr: false });
