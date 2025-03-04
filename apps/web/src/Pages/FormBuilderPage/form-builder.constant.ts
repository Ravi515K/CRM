import { FieldType } from "./form-builder.type";

const availableFields: FieldType[] = [
  { id: "1", name: "Name", code: "name", label: "Name", type: "text", isSelected: false },
  { id: "2", name: "Email", code: "email", label: "Email", type: "email", isSelected: false },
  { id: "3", name: "Phone", code: "phone", label: "Phone", type: "tel", isSelected: false },
  { id: "4", name: "Gender", code: "gender", label: "Gender", type: "select", isSelected: false },
  { id: "5", name: "IsSmoker", code: "isSmoker", label: "Is Smoker", type: "checkbox", isSelected: false },
  { id: "6", name: "Selector", code: "selector", label: "Selector", type: "select", isSelected: false },
];

export { availableFields };
