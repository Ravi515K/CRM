import { useState } from "react";
import { FieldType } from "../form-builder.type";

const useFormBuilder = () => {
  const [formFields, setFormFields] = useState<FieldType[]>([]);
  const [selectedField, setSelectedField] = useState<FieldType | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  // Functions
  const addField = (field: FieldType) => {
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
