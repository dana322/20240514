import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zn">
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
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
