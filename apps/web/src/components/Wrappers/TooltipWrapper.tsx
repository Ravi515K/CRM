import React, { useState } from "react";

interface ToolTipWrapperProps {
  text: string;
  children: React.ReactNode;
  isOpen: boolean;
}

const ToolTipWrapper = ({ text, children, isOpen }: ToolTipWrapperProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      data-open={isOpen}
      className="flex gap-6 data-[open=false]:gap-0 data-[open=false]:relative data-[open=false]:inline-flex"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && !isOpen && (
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 text-sm text-white bg-darkBg rounded shadow-md p-2 w-max z-10">
          {text}
        </div>
      )}
    </div>
  );
};

export default ToolTipWrapper;
