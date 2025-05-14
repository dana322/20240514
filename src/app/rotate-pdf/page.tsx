"use client";

import Head from "next/head";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import PdfUploadArea from "@/app/rotate-pdf/_components/PdfUploadArea";
import { useState } from "react";
import PdfOperation from "@/app/rotate-pdf/_components/PdfOperation";

export default function Dashboard() {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const schemaData = {
    "@context": "https://20240514.vercel.app/rotate-pdf",
    "@type": "Article",
    headline: "PDF页面旋转工具 - 在线免费旋转PDF",
    description:
      "简单易用的在线PDF页面旋转工具，支持单页、多页旋转，免费保存，无需注册。",
    author: { "@type": "Person", name: "dana" },
  };

  return (
    <>
      <Head>
        <title>PDF页面旋转工具 - 在线免费旋转PDF</title>
        <meta
          name="google-site-verification"
          content="TFep6kGBflKC0tna2TM26LJeEVE2gtTIa7ahd3v2cA8"
        />
        <meta
          name="description"
          content="简单易用的在线PDF页面旋转工具，支持单页、多页旋转，免费保存，无需注册。"
        />
        <meta
          name="keywords"
          content="PDF, PDF旋转, 在线工具, 免费, 页面旋转, Rotate PDF"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <div className="">
        <Header />
        <Main>
          {/* 标题 */}
          <h1 className="text-5xl font-serif font-normal text-center mb-4 text-black">
            Rotate PDF Pages
          </h1>
          {/* 副标题 */}
          <p className="text-lg text-gray-500 text-center mb-12 max-w-lg">
            Simply click on a page to rotate it. You can then download your
            modified PDF.
          </p>
          {/* 上传区域/操作区域 */}
          {pdfFile ? (
            <PdfOperation pdfFile={pdfFile} setPdfFile={setPdfFile} />
          ) : (
            <PdfUploadArea setPdfFile={setPdfFile} />
          )}
        </Main>
        <Footer />
      </div>
    </>
  );
}
