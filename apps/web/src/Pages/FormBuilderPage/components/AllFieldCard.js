import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { GripVertical, PencilIcon, Trash2Icon } from "lucide-react";
import { Reorder } from "motion/react";
import { useState } from "react";
import { availableFields } from "../form-builder.constant";
const AllFieldCard = ({ addField, }) => {
    const [items, setItems] = useState(availableFields);
    return (_jsx("div", { children: _jsx(Reorder.Group, { axis: "y", values: items, onReorder: setItems, className: "", children: _jsx("section", { className: "flex flex-col gap-4", children: items.map((item) => (_jsx(Reorder.Item, { value: item, children: _jsxs("div", { className: "flex items-center gap-8 border border-offWhite p-2", onClick: () => {
                            addField(item);
                        }, children: [_jsx(GripVertical, { className: "size-4" }), _jsx("p", { className: "text-base text-body font-semibold", children: item?.label }), _jsxs("div", { className: "flex gap-2 ml-auto", children: [_jsx(PencilIcon, { className: "size-4" }), _jsx(Trash2Icon, { className: "size-4" })] })] }) }, item?.id))) }) }) }));
};
export default AllFieldCard;
