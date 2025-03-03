import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import SideBar from "../Sidebar/SideBar";
const SidebarWrapper = ({ children }) => {
    const [open, setOpen] = useState(false);
    return (_jsxs("div", { className: "w-full h-full flex gap-5 px-2", children: [_jsx("section", { "data-collapse": open, className: "w-[200px] data-[collapse=false]:w-[50px] h-full bg-offWhite", children: _jsx(SideBar, { open: open, setOpen: setOpen }) }), _jsx("section", { className: "flex flex-col gap-4 flex-1", children: children })] }));
};
export default SidebarWrapper;
