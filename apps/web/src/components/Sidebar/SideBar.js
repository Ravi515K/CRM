import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SIDE_BAR } from "../../global.constant";
import { PanelLeftOpen, PanelRightOpen } from "lucide-react";
import * as motion from "motion/react-client";
import SideTab from "./SideTab";
const SideBar = ({ open, setOpen, }) => {
    return (_jsx(motion.div, { initial: { opacity: 0.5, scale: 1 }, animate: { opacity: 0.9, scale: 1 }, transition: { duration: 0.8, delay: 1, ease: [0, 0.71, 0.2, 1.01] }, exit: { opacity: 0, scale: 0, width: 0 }, "data-open": open, className: "w-full h-full flex flex-col  data-[open=false]:items-center", children: _jsxs("aside", { children: [_jsx("button", { className: "flex items-center gap-6 py-2 w-full", onClick: () => {
                        setOpen(!open);
                    }, children: open ? (_jsx(PanelLeftOpen, { className: "size-6" })) : (_jsx(PanelRightOpen, { className: "size-6" })) }), SIDE_BAR?.map((sideTab) => {
                    const isSettingTab = sideTab?.code === "settings";
                    return (_jsx(motion.button, { whileHover: {
                            scale: open ? 1 : 1.2,
                        }, "data-setting": isSettingTab, className: "flex items-center gap-6 py-4 w-full data-[setting=true]:relative data-[setting=true]:top-[200px]", children: _jsx(SideTab, { sideTab: sideTab, open: open }) }, sideTab?.id));
                })] }) }, "box"));
};
export default SideBar;
