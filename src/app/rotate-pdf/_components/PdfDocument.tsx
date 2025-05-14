import Loading from "@/components/ui/Loading";
import { useState } from "react";
import { PageSize } from "@/types";
import { Document } from "react-pdf";
import PdfThumbnail from "./PdfThumbnail";
import dynamic from "next/dynamic";

interface PdfDocumentProps {
  file: File;
  setRotateArr: (arr: number[]) => void;
  rotateArr: number[];
  scale: number;
  handleRotate: (idx: number) => void;
}

const PdfDocument = ({
  file,
  setRotateArr,
  rotateArr,
  scale,
  handleRotate,
}: PdfDocumentProps) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageSizes, setPageSizes] = useState<PageSize[]>([]);
  const [isPdfLoading, setIsPdfLoading] = useState<boolean>(true);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageSizes(Array(numPages).fill({ width: 1, height: 1 }));
    setRotateArr(Array(numPages).fill(0));
    setIsPdfLoading(false);
  }

  function handlePageLoad(page: any, idx: number) {
    const { width, height } = page;
    setPageSizes((prev) => {
      const next = [...prev];
      next[idx] = { width, height };
      return next;
    });
  }

  function onDocumentLoadError(error: Error) {
    console.error("PDF加载错误:", error);
    setIsPdfLoading(false);
  }

  return (
    <Document
      file={file}
      onLoadSuccess={onDocumentLoadSuccess}
      onLoadError={onDocumentLoadError}
      loading={<Loading />}
    >
      {!isPdfLoading && (
        <div className="flex flex-wrap gap-4 justify-center">
          {Array.from({ length: numPages }, (_, i) => (
            <PdfThumbnail
              key={i}
              index={i}
              size={pageSizes[i] || { width: 1, height: 1 }}
              scale={scale}
              rotation={rotateArr[i] || 0}
              onRotate={handleRotate}
              onPageLoad={handlePageLoad}
            />
          ))}
        </div>
      )}
    </Document>
  );
};

export default dynamic(() => Promise.resolve(PdfDocument), { ssr: false });
