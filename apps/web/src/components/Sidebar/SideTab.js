import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ToolTipWrapper from "../Wrappers/TooltipWrapper";
const SideTab = ({ sideTab, open }) => {
    return (_jsx(ToolTipWrapper, { text: sideTab?.name, isOpen: open, children: _jsxs("section", { className: "flex gap-2", children: [_jsx("div", { className: "", children: sideTab?.icon }), open && _jsx("h3", { className: "text-subHeading", children: sideTab?.name })] }) }));
};
export default SideTab;
