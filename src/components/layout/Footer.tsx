"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="border-t border-gray-200 mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* 品牌与社交区 */}
          <div className="flex flex-col items-start md:col-span-1">
            {/* Logo */}
            <div className="mb-4">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0d2321]">
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
                      stroke="#fff"
                      strokeWidth="2"
                    />
                    <path
                      d="M2.5 13.5C2.5 10.1863 5.18629 7.5 8.5 7.5C11.8137 7.5 14.5 10.1863 14.5 13.5C14.5 16.8137 11.8137 19.5 8.5 19.5C5.18629 19.5 2.5 16.8137 2.5 13.5Z"
                      stroke="#fff"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </span>
            </div>
            <p className="text-gray-500 text-base mb-6 max-w-xs">
              Chat with any PDF: ask questions, get summaries, find information,
              and more.
            </p>
            <div className="flex space-x-5 text-gray-400 text-2xl">
              {/* TikTok */}
              <a
                href="#"
                aria-label="TikTok"
                className="hover:text-gray-700 transition-colors"
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M9.5 7.5v9a3 3 0 1 0 3-3h-1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.5 3.5v2a3 3 0 0 0 3 3h2"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-gray-700 transition-colors"
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
              {/* Twitter */}
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-gray-700 transition-colors"
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M22 5.924a8.94 8.94 0 0 1-2.357.646A4.14 4.14 0 0 0 21.448 4.1a8.28 8.28 0 0 1-2.605.996A4.14 4.14 0 0 0 11.5 9.034c0 .324.036.64.106.942A11.75 11.75 0 0 1 3.1 4.868a4.13 4.13 0 0 0-.56 2.08c0 1.436.73 2.703 1.84 3.448a4.13 4.13 0 0 1-1.872-.517v.052a4.14 4.14 0 0 0 3.32 4.058c-.178.05-.366.077-.56.077-.137 0-.27-.013-.4-.038a4.14 4.14 0 0 0 3.86 2.872A8.3 8.3 0 0 1 2 19.07a11.73 11.73 0 0 0 6.29 1.84c7.547 0 11.68-6.254 11.68-11.68 0-.178-.004-.355-.012-.53A8.18 8.18 0 0 0 22 5.924Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="hover:text-gray-700 transition-colors"
              >
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <rect
                    x="2"
                    y="5"
                    width="20"
                    height="14"
                    rx="4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path d="M10 9.5v5l4-2.5-4-2.5Z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
          {/* Products */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Products</h3>
            <ul className="space-y-2 text-gray-500 text-base">
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors"
                >
                  Use cases
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors"
                >
                  Chrome extension
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-orange-500 font-medium hover:text-orange-600 transition-colors"
                >
                  API Hub
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors"
                >
                  Video tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          {/* We also built */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">We also built</h3>
            <ul className="space-y-2 text-gray-500 text-base">
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors"
                >
                  Resume AI Scanner
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors"
                >
                  Invoice AI Scanner
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors"
                >
                  AI Quiz Generator
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors"
                >
                  QuickyAI
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors"
                >
                  Doctrine
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors"
                >
                  PDF GPTs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors"
                >
                  PDF AI generator
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors"
                >
                  Other PDF tools
                </Link>
              </li>
            </ul>
          </div>
          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-gray-500 text-base">
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors"
                >
                  PDF.ai vs ChatPDF
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors"
                >
                  PDF.ai vs Acrobat Reader
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors"
                >
                  Legal
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors"
                >
                  Affiliate program{" "}
                  <span role="img" aria-label="money">
                    🤑
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors"
                >
                  Investor
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
