import React from "react";

interface CircleButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function CircleButton({ children, onClick }: CircleButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center transition-shadow hover:shadow-md focus:outline-none"
    >
      {children}
    </button>
  );
}
