import { createContext, Dispatch, SetStateAction, useState } from "react";
import { FieldType } from "../Pages/FormBuilderPage/form-builder.type";

interface IFormBuilderProps {
  formFields: FieldType[];
  setFormFields: Dispatch<SetStateAction<FieldType[]>> | any;
  selectedField: FieldType | null;
  setSelectedField: Dispatch<SetStateAction<FieldType | null>>;
  addField: (item: FieldType) => void;
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
    console.log(field)
    setFormFields([...formFields, field]);
    console.log(formFields)
  };

  console.log(formFields)
  return (
    <FormBuilderContext.Provider
      value={{
        formFields,
        setFormFields,
        selectedField,
        setSelectedField,
        addField,
      }}
    >
      {children}
    </FormBuilderContext.Provider>
  );
};

export { FormBuilderContext, FormBuilderContextProvider };
