"use client";

import { Upload } from "lucide-react";
import { useRef, useState } from "react";

interface PdfUploadAreaProps {
  setPdfFile: (file: File | null) => void;
}

export default function PdfUploadArea({ setPdfFile }: PdfUploadAreaProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>("");
  const [dragActive, setDragActive] = useState(false);

  const handleAreaClick = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setFileName(file.name);
      setPdfFile(file);
    } else {
      setFileName("");
      alert("仅支持上传PDF文件");
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type === "application/pdf") {
      setFileName(file.name);
    } else {
      setFileName("");
      alert("仅支持上传PDF文件");
    }
  };

  return (
    <div
      className={`w-80 h-96 bg-white border-2 border-dashed rounded-lg flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow cursor-pointer ${
        dragActive ? "border-orange-400" : "border-gray-200"
      }`}
      onClick={handleAreaClick}
      onDragOver={handleDragOver}
      onDragEnter={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        ref={inputRef}
        type="file"
        accept="application/pdf"
        className="hidden"
        onChange={handleFileChange}
      />
      <Upload size={40} className="mb-4 text-gray-400" />
      <span className="text-gray-500 text-base">
        {fileName ? fileName : "Click to upload or drag and drop"}
      </span>
    </div>
  );
}
