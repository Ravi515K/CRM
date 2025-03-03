import { FieldType } from "./form-builder.type";

const availableFields: FieldType[] = [
  { id: "name", label: "Name", type: "text", isSelected:false },
  { id: "email", label: "Email", type: "email", isSelected:false },
  { id: "phone", label: "Phone", type: "tel", isSelected:false },
  { id: "gender", label: "Gender", type: "select", isSelected:false },
  { id: "isSmoker", label: "Is Smoker", type: "checkbox", isSelected:false },
  { id: "selector", label: "Selector", type: "select", isSelected:false },
];
export { availableFields };
