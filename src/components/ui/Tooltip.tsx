import React, { useState, useRef, useEffect } from "react";

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children, className }) => {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => setVisible(true), 100);
  };
  const hideTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {visible && (
        <div
          className={`z-50 absolute left-1/2 -translate-x-1/2 -top-13 mb-2 flex flex-col items-center ${
            className || ""
          }`}
        >
          <div className="px-4 py-2 bg-[#232323] text-white text-sm rounded-lg shadow-lg whitespace-nowrap relative">
            {content}
            <div className="absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-[#232323]" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
