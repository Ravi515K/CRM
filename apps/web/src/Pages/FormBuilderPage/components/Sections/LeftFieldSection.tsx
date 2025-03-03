import { UiButton } from "@Repo/ui/components";
import AllFieldCard from "../AllFieldCard";
import { FieldType } from "../../form-builder.type";

const LeftFieldSection = ({
  addField,
  toggleFieldModal,
  className,
}: {
  toggleFieldModal: any;
  className: string;
  addField: (item: FieldType) => void;
}) => {
  return (
    <div className={`w-1/4 border rounded-md p-4 relative ${className}`}>
      <h2 className="text-body font-bold">List of Fields</h2>
      <AllFieldCard addField={addField} />

      <UiButton
        buttonType="tertiary"
        text="Add Field"
        className="w-64 text-center border p-2 text-md absolute bottom-4 right-12 hover:animate-pulse"
        onClick={() => {
          toggleFieldModal();
        }}
      />
    </div>
  );
};

export default LeftFieldSection;
