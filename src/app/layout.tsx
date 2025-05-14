import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PDF页面旋转工具 - 在线免费旋转PDF",
  description:
    "简单易用的在线PDF页面旋转工具，支持单页、多页旋转，免费保存，无需注册。",
  other: {
    "google-site-verification": "TFep6kGBflKC0tna2TM26LJeEVE2gtTIa7ahd3v2cA8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zn">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
