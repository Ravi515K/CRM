type FieldType = {
  id: string;
  name:string;
  code:string;
  label: string;
  type: string;
  placeholder?: string;
  isSelected?:boolean;
  field_key?:string;
  grid_size?:string;
};
// fileType-type of file
//Date- MinDate, MaxDate, isRange, isMultiSelect
//type - (text, number=> length)
export type { FieldType };
