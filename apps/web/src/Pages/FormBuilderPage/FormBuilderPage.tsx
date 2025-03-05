import { UiPageWrapper } from "@repo/ui/components";
import AddFieldsModal from "./components/AddFieldsModal/AddFieldsModal";
import FormPreviewSection from "./components/Sections/FormPreviewSection";
import LeftFieldSection from "./components/Sections/LeftFieldSection";
import RightFieldSection from "./components/Sections/RightFieldSection";
import useFormBuilder from "./hook/useFormBuilder";

const FormBuilder = () => {
  const {
    states: { isOpen },
    functions: { toggleFieldModal },
  } = useFormBuilder();

  return (
    <UiPageWrapper className="flex gap-2 relative bg-offWhite">
      <LeftFieldSection toggleFieldModal={toggleFieldModal} className="" />
      <FormPreviewSection />
      <RightFieldSection />
      {isOpen && (
        <AddFieldsModal isOpen={isOpen} handleClose={toggleFieldModal} />
      )}
    </UiPageWrapper>
  );
};

export default FormBuilder;
