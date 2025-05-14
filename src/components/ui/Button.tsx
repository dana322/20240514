import React from "react";

interface ButtonProps {
  type: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ type, children, onClick }: ButtonProps) {
  const base =
    "px-7 py-3 rounded-lg font-bold text-lg focus:outline-none transition-colors duration-150";
  const styles =
    type === "primary"
      ? "bg-[#F46A33] text-white hover:bg-[#e65c1c] "
      : "bg-[#232936] text-white hover:bg-[#171b23]";
  return (
    <button className={`${base} ${styles}`} onClick={onClick} type="button">
      {children}
    </button>
  );
}
