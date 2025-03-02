import { useState } from "react";
import { availableFields } from "./form-builder.constant";
import { FieldType } from "./form-builder.type";



const FormBuilder = () => {
  const [formFields, setFormFields] = useState<FieldType[]>([]);
  const [selectedField, setSelectedField] = useState<FieldType | null>(null);

  const addField = (field: FieldType) => {
    setFormFields([
      ...formFields,
      { ...field, id: `${field.id}-${Date.now()}` },
    ]);
  };

  return (
    <div className="flex gap-4 p-4">
      <div className="w-1/4 border p-4">
        <h2 className="text-body font-bold">List of Fields</h2>
        {availableFields.map((field) => (
          <button
            key={field.id}
            className="w-full p-2 mb-2 bg-gray-200 rounded hover:bg-gray-300"
            onClick={() => addField(field)}
          >
            {field.label}
          </button>
        ))}
        <button className="w-full p-2 mt-4 bg-blue-500 text-white rounded">
          Add Fields
        </button>
      </div>

      <div className="w-1/2 border p-4">
        <h2 className="font-bold mb-2">Form Preview</h2>
        <div className="grid grid-cols-2 gap-4">
          {formFields.map((field: FieldType) => (
            <div
              key={field.id}
              className="p-2 border rounded"
              onClick={() => setSelectedField(field)}
            >
              <label className="block text-sm font-medium">{field.label}</label>
              <input
                type={field.type}
                placeholder={field.placeholder || "Enter value"}
                className="w-full p-2 border rounded mt-1"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/4 border p-4">
        <h2 className="font-bold mb-2">Field Options</h2>
        {selectedField ? (
          <div>
            <label className="block text-sm">Label</label>
            <input
              type="text"
              value={selectedField.label}
              className="w-full p-2 border rounded mt-1"
              readOnly
            />
            <label className="block text-sm mt-2">Placeholder</label>
            <input
              type="text"
              value={selectedField.placeholder || ""}
              className="w-full p-2 border rounded mt-1"
              onChange={(e) =>
                setSelectedField({
                  ...selectedField,
                  placeholder: e.target.value,
                })
              }
            />
          </div>
        ) : (
          <p>Select a field to edit</p>
        )}
        <button className="w-full p-2 mt-4 bg-green-700 text-white rounded">
          Save
        </button>
      </div>
    </div>
  );
};

export default FormBuilder;
