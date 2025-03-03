import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { UiButton } from "@Repo/ui/components";
import AllFieldCard from "../AllFieldCard";
const LeftFieldSection = ({ addField, toggleFieldModal, className, }) => {
    return (_jsxs("div", { className: `w-1/4 border rounded-md p-4 relative ${className}`, children: [_jsx("h2", { className: "text-body font-bold", children: "List of Fields" }), _jsx(AllFieldCard, { addField: addField }), _jsx(UiButton, { buttonType: "tertiary", text: "Add Field", className: "w-64 text-center border p-2 text-md absolute bottom-4 right-12 hover:animate-pulse", onClick: () => {
                    toggleFieldModal();
                } })] }));
};
export default LeftFieldSection;
