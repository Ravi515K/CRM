import { createContext, Dispatch, SetStateAction, useState } from "react";
import { FieldType } from "../Pages/FormBuilderPage/form-builder.type";

interface IFormBuilderProps {
  formFields: FieldType[];
  setFormFields: Dispatch<SetStateAction<FieldType[]>> | any;
  selectedField: FieldType | null;
  setSelectedField: Dispatch<SetStateAction<FieldType | null>>;
  addField: (item: FieldType) => void;
  deleteField:(id:number)=>void;
}
const FormBuilderContext = createContext<IFormBuilderProps | null>(null);

const FormBuilderContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [formFields, setFormFields] = useState<FieldType[]>([]);
  const [selectedField, setSelectedField] = useState<FieldType | null>(null);
  const addField = (field: FieldType) => {
    setFormFields([...formFields, field]);
  };
  const deleteField = (id: number) => {
    setFormFields((prevFields) => prevFields.filter((field) => Number(field.id) !== id));
  };

  return (
    <FormBuilderContext.Provider
      value={{
        formFields,
        setFormFields,
        selectedField,
        setSelectedField,
        addField,
        deleteField
      }}
    >
      {children}
    </FormBuilderContext.Provider>
  );
};

export { FormBuilderContext, FormBuilderContextProvider };
