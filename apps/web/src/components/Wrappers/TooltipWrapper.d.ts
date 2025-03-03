import React from "react";
interface ToolTipWrapperProps {
    text: string;
    children: React.ReactNode;
    isOpen: boolean;
}
declare const ToolTipWrapper: ({ text, children, isOpen }: ToolTipWrapperProps) => import("react/jsx-runtime").JSX.Element;
export default ToolTipWrapper;
