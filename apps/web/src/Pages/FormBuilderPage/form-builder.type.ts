type FieldType = {
  id: string | number;
  name: string;
  placeholder?: string;
  type: string;
  label: string;
  grid_size: { id: string; name: string; code: string; value: string };
  field_key: string;
  min?: number;
  max?: number;
  options?: any;
  input_type?: { id: string; name: string; code: string };
};

export type { FieldType };
