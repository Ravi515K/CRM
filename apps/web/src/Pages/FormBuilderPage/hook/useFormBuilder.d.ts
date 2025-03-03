import { FieldType } from "../form-builder.type";
declare const useFormBuilder: () => {
    states: {
        formFields: FieldType[];
        setFormFields: import("react").Dispatch<import("react").SetStateAction<FieldType[]>>;
        selectedField: FieldType | null;
        setSelectedField: import("react").Dispatch<import("react").SetStateAction<FieldType | null>>;
        isOpen: boolean;
        setIsOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    };
    functions: {
        addField: (field: FieldType) => void;
        toggleFieldModal: () => void;
    };
};
export default useFormBuilder;
