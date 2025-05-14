import { redirect } from "next/navigation";
import { Head } from "next/document";

export default function Home() {
  redirect("/rotate-pdf");
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "PDF页面旋转工具 - 在线免费旋转PDF",
    description:
      "简单易用的在线PDF页面旋转工具，支持单页、多页旋转，免费保存，无需注册。",
    author: { "@type": "Person", name: "PDF工具团队" },
  };

  return (
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
  );
}
