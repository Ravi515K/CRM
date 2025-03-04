import { UiButton } from "@Repo/ui/components";
import AllFieldCard from "../AllFieldCard";

const LeftFieldSection = ({
  toggleFieldModal,
  className,
}: {
  toggleFieldModal: any;
  className: string;
}) => {
  return (
    <div className={`w-1/4 rounded-md p-4 bg-white relative ${className}`}>
      <h2 className="font-bold mb-2">Components</h2>
      <AllFieldCard />

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
