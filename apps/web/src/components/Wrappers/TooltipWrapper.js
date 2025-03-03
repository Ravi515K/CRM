import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const ToolTipWrapper = ({ text, children, isOpen }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (_jsxs("div", { "data-open": isOpen, className: "flex gap-6 data-[open=false]:gap-0 data-[open=false]:relative data-[open=false]:inline-flex", onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), children: [children, isHovered && !isOpen && (_jsx("div", { className: "absolute left-full top-1/2 transform -translate-y-1/2 ml-2 text-sm text-white bg-darkBg rounded shadow-md p-2 w-max z-10", children: text }))] }));
};
export default ToolTipWrapper;
