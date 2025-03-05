import {
  UiButton,
  UiSelector,
  UiSwitch,
  UiTextInputBase,
} from "@repo/ui/components";
import { LayoutGrid, Pencil, Settings } from "lucide-react";
import { useContext, useState } from "react";
import { FormBuilderContext } from "../../../../context/FormBuilderContext";
import { FieldType } from "../../form-builder.type";

const FormPreviewSection = () => {
  const [isPreview, setIsPreview] = useState("preview");
  const [checked, setChecked] = useState(false);
  const formBuilderContext = useContext(FormBuilderContext);

  const Fields = ({ field }: { field: any }) => {
    const { label, type, name, placeholder, input_type } = field;
    console.log(input_type)
    switch (type) {
      case "input":
        return (
          <UiTextInputBase
            name={name}
            label={label}
            placeholder={placeholder}
            type={input_type}
            containerClass="gap-1"
          />
        );
      case "selector":
        return (
          <UiSelector
            label={label}
            placeholder="Select options"
            value=""
            options={[]}
            onChange={() => {}}
          />
        );
      case "checkbox":
        return (
          <UiSwitch
            label={label}
            checked={checked}
            setChecked={() => setChecked(!checked)}
            className="w-10 ring-1"
          />
        );

      default:
        return null;
    }
  };
  return (
    <div className="w-1/2 rounded-md p-4 bg-white">
      <section className="flex justify-between mb-4">
        <h2 className="font-bold mb-2">Form Preview</h2>
        <div className="flex gap-4">
          <UiButton
            icon={<LayoutGrid className="size-4" />}
            text="Preview"
            className="flex-row-reverse p-1"
            buttonType="tertiary"
            onClick={() => {
              setIsPreview("preview");
              formBuilderContext?.setSelectedField(null);
            }}
          />
          <UiButton
            icon={<Settings className="size-4" />}
            text="Preview Setting"
            className="flex-row-reverse p-1"
            buttonType="tertiary"
            onClick={() => {
              setIsPreview("edit");
            }}
          />
        </div>
      </section>

      <div className="grid grid-cols-3 gap-2">
        {formBuilderContext?.formFields?.map((field: FieldType) => {
          const isSelectedField = formBuilderContext?.selectedField?.id === field?.id
          const gridSize = +field?.grid_size?.value;
          const widthClass =
            gridSize === 1
              ? "col-span-1"
              : gridSize === 2
                ? "col-span-2"
                : "col-span-3";

          return (
            <div
            data-selected={isSelectedField}
              key={field.id}
              className={`p-2 ring-1 data-[selected=false]:ring-extraLightGray  ring-primary rounded ${widthClass} relative`}
            >
              <Fields field={field} />
              {isPreview === "edit" && (
                <Pencil
                  className="size-4 absolute top-1 right-2 cursor-pointer"
                  onClick={() => formBuilderContext?.setSelectedField(field)}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FormPreviewSection;
