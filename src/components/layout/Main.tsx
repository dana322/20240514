"use client";

import type { PropsWithChildren } from "react";
import PdfUploadArea from "../../app/rotate-pdf/_components/PdfUploadArea";

export default function Main({ children }: PropsWithChildren) {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-[#F7F5EE]">
      {children}
    </main>
  );
}
