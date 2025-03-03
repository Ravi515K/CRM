import {
  UiPageWrapper,
  UiTextInputBase
} from "@repo/ui/components";
import AddFieldsModal from "./components/AddFieldsModal/AddFieldsModal";
import LeftFieldSection from "./components/Sections/LeftFieldSection";
import { FieldType } from "./form-builder.type";
import useFormBuilder from "./hook/useFormBuilder";

const FormBuilder = () => {
  const {
    states: { isOpen, selectedField, formFields, setSelectedField },
    functions: { toggleFieldModal,addField },
  } = useFormBuilder();

  const handleSubmit = () => {};
  return (
    <UiPageWrapper className="flex gap-4 relative">
      <LeftFieldSection toggleFieldModal={toggleFieldModal} className="" addField={addField} />

      <div className="w-1/2 border rounded-md p-4">
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

      <div className="w-1/4 border rounded-md p-4">
        <h2 className="font-bold mb-2">Field Options</h2>
        {selectedField ? (
          <div>
            <UiTextInputBase
              label="Label"
              type="text"
              value={selectedField.label}
              className="w-full p-2 border rounded mt-1"
              readOnly
            />

            <UiTextInputBase
              label="Placeholder"
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

      {isOpen && (
        <AddFieldsModal
          isOpen={isOpen}
          handleClose={toggleFieldModal}
          handleSubmit={handleSubmit}
        />
      )}
    </UiPageWrapper>
  );
};

export default FormBuilder;
