"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white w-full border-b border-b-gray-100">
      <nav className="max-w-screen-2xl mx-auto flex items-center justify-between h-14 p-8">
        {/* Logo区 */}
        <div className="flex items-center space-x-2 select-none">
          {/* PDF.ai Logo SVG */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="logo">
              <path
                d="M7.5 13.5C7.5 8.52944 11.5294 4.5 16.5 4.5C21.4706 4.5 25.5 8.52944 25.5 13.5C25.5 18.4706 21.4706 22.5 16.5 22.5C11.5294 22.5 7.5 18.4706 7.5 13.5Z"
                stroke="#171717"
                strokeWidth="2"
              />
              <path
                d="M2.5 13.5C2.5 10.1863 5.18629 7.5 8.5 7.5C11.8137 7.5 14.5 10.1863 14.5 13.5C14.5 16.8137 11.8137 19.5 8.5 19.5C5.18629 19.5 2.5 16.8137 2.5 13.5Z"
                stroke="#171717"
                strokeWidth="2"
              />
            </g>
          </svg>
          <span className="font-semibold text-lg tracking-tight">PDF.ai</span>
        </div>
        {/* 右侧菜单区 */}
        <div className="flex items-center space-x-6 text-[15px] font-normal">
          <Link href="#" className="hover:text-black text-gray-800">
            Pricing
          </Link>
          <Link href="#" className="hover:text-black text-gray-800">
            Chrome extension
          </Link>
          <Link href="#" className="hover:text-black text-gray-800">
            Use cases
          </Link>
          <Link
            href="#"
            className="text-orange-500 font-medium hover:text-orange-600"
          >
            API Hub
          </Link>
          {/* 语言选择 */}
          <div className="flex items-center space-x-1 cursor-pointer">
            {/* 美国国旗SVG */}
            <span className="inline-block w-5 h-5 align-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="20"
                height="20"
              >
                <rect width="32" height="32" fill="#fff" />
                <g>
                  <rect width="32" height="32" fill="#b22234" />
                  <g fill="#fff">
                    <rect y="2.46" width="32" height="2.46" />
                    <rect y="7.38" width="32" height="2.46" />
                    <rect y="12.3" width="32" height="2.46" />
                    <rect y="17.22" width="32" height="2.46" />
                    <rect y="22.14" width="32" height="2.46" />
                    <rect y="27.06" width="32" height="2.46" />
                  </g>
                  <rect width="13.72" height="13.72" fill="#3c3b6e" />
                  <g fill="#fff">
                    <g id="stars">
                      <polygon points="1.37,1.37 1.72,2.37 2.77,2.37 1.92,3.01 2.27,4.01 1.37,3.37 0.47,4.01 0.82,3.01 -0.03,2.37 1.02,2.37" />
                    </g>
                  </g>
                </g>
              </svg>
            </span>
            <span className="ml-1">EN</span>
          </div>
          {/* Get started 按钮 */}
          <Link
            href="#"
            className="flex items-center px-4 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition-all"
          >
            Get started
            <ChevronRight size={16} />
          </Link>
        </div>
      </nav>
    </header>
  );
}
