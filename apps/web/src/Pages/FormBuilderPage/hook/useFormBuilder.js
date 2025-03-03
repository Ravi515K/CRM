import { useState } from "react";
const useFormBuilder = () => {
    const [formFields, setFormFields] = useState([]);
    const [selectedField, setSelectedField] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    // Functions
    const addField = (field) => {
        setFormFields([...formFields, field]);
    };
    const toggleFieldModal = () => {
        setIsOpen((prev) => !prev);
    };
    return {
        states: {
            formFields,
            setFormFields,
            selectedField,
            setSelectedField,
            isOpen,
            setIsOpen,
        },
        functions: { addField, toggleFieldModal },
    };
};
export default useFormBuilder;
