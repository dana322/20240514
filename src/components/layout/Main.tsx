"use client";

import type { PropsWithChildren } from "react";

export default function Main({ children }: PropsWithChildren) {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-[#F7F5EE]">
      {children}
    </main>
  );
}
