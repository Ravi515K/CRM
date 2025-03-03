import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { UiButton, UiDrawerWrapper, UiSelector, UiTextInput } from "@repo/ui/components";
import { ArrowRight } from "lucide-react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { availableFields } from "../../form-builder.constant";
const AddFieldsModal = ({ isOpen, handleClose, handleSubmit, }) => {
    const formMethods = useForm();
    return (_jsx(UiDrawerWrapper, { isOpen: isOpen, HeadSection: _jsxs("section", { className: "flex flex-col", children: [_jsx("h2", { className: "text-md font-semibold text-heading", children: "Add Fields" }), _jsx("p", { className: "text-sm font-medium text-darkGray", children: "Generate fields on form-builder" })] }), children: _jsx(FormProvider, { ...formMethods, children: _jsxs("form", { onSubmit: formMethods.handleSubmit(handleSubmit), className: "flex flex-col gap-4", children: [_jsxs("div", { className: "grid grid-cols-2  ring-1 ring-offWhite rounded  px-2", children: [_jsx(UiTextInput, { name: "name", label: "Name" }), _jsx(Controller, { name: "type", control: formMethods?.control, render: ({ field: { value, onChange } }) => {
                                    return (_jsx(UiSelector, { value: value, options: availableFields, onChange: onChange, placeholder: "Select field" }));
                                } })] }), _jsxs("div", { className: "flex items-center gap-2 mt-2 ", children: [_jsx(UiButton, { buttonType: "secondary", text: "Cancel", className: "w-full", onClick: handleClose }), _jsx(UiButton, { isLoading: false, type: "submit", text: "Submit", icon: _jsx(ArrowRight, { className: "size-4" }), className: "w-full" })] })] }) }) }));
};
export default AddFieldsModal;
