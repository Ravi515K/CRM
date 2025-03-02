import { FieldType } from "./form-builder.type";

const availableFields: FieldType[] = [
  { id: "name", label: "Name", type: "text" },
  { id: "email", label: "Email", type: "email" },
  { id: "phone", label: "Phone", type: "tel" },
  { id: "gender", label: "Gender", type: "select" },
  { id: "isSmoker", label: "Is Smoker", type: "checkbox" },
];
export { availableFields };
