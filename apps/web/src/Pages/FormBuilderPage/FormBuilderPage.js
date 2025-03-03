import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { UiPageWrapper, UiTextInputBase } from "@repo/ui/components";
import AddFieldsModal from "./components/AddFieldsModal/AddFieldsModal";
import LeftFieldSection from "./components/Sections/LeftFieldSection";
import useFormBuilder from "./hook/useFormBuilder";
const FormBuilder = () => {
    const { states: { isOpen, selectedField, formFields, setSelectedField }, functions: { toggleFieldModal, addField }, } = useFormBuilder();
    const handleSubmit = () => { };
    return (_jsxs(UiPageWrapper, { className: "flex gap-4 relative", children: [_jsx(LeftFieldSection, { toggleFieldModal: toggleFieldModal, className: "", addField: addField }), _jsxs("div", { className: "w-1/2 border rounded-md p-4", children: [_jsx("h2", { className: "font-bold mb-2", children: "Form Preview" }), _jsx("div", { className: "grid grid-cols-2 gap-4", children: formFields.map((field) => (_jsxs("div", { className: "p-2 border rounded", onClick: () => setSelectedField(field), children: [_jsx("label", { className: "block text-sm font-medium", children: field.label }), _jsx("input", { type: field.type, placeholder: field.placeholder || "Enter value", className: "w-full p-2 border rounded mt-1" })] }, field.id))) })] }), _jsxs("div", { className: "w-1/4 border rounded-md p-4", children: [_jsx("h2", { className: "font-bold mb-2", children: "Field Options" }), selectedField ? (_jsxs("div", { children: [_jsx(UiTextInputBase, { label: "Label", type: "text", value: selectedField.label, className: "w-full p-2 border rounded mt-1", readOnly: true }), _jsx(UiTextInputBase, { label: "Placeholder", type: "text", value: selectedField.placeholder || "", className: "w-full p-2 border rounded mt-1", onChange: (e) => setSelectedField({
                                    ...selectedField,
                                    placeholder: e.target.value,
                                }) })] })) : (_jsx("p", { children: "Select a field to edit" })), _jsx("button", { className: "w-full p-2 mt-4 bg-green-700 text-white rounded", children: "Save" })] }), isOpen && (_jsx(AddFieldsModal, { isOpen: isOpen, handleClose: toggleFieldModal, handleSubmit: handleSubmit }))] }));
};
export default FormBuilder;
