import {
  UiButton,
  UiDrawerWrapper,
  UiModalContainer,
  UiSelector,
  UiTextInput,
} from "@repo/ui/components";
import { ArrowRight } from "lucide-react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { availableFields } from "../../form-builder.constant";
import { FormBuilderContext } from "../../../../context/FormBuilderContext";
import { useContext } from "react";
const AddFieldsModal = ({
  isOpen,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: () => void;
}) => {
  const formMethods = useForm<any>();
  const formBuilderContext = useContext(FormBuilderContext);
  const handleSubmit = (data: any) => {
    formBuilderContext?.addField(data?.type);
    handleClose()
  };
  return (
    <UiModalContainer
      isOpen={isOpen}
      handleCloseModal={handleClose}
      headSection={
        <section className="flex flex-col">
          <h2 className="text-md font-semibold text-heading">Add Fields</h2>
          <p className="text-sm font-medium text-darkGray">
            Generate fields on form-builder
          </p>
        </section>
      }
    >
      <FormProvider {...formMethods}>
        <form
          onSubmit={formMethods.handleSubmit(handleSubmit)}
          className="flex flex-col gap-4 w-[500px]"
        >
          <div className="flex flex-col gap-4  ring-1 ring-offWhite rounded  p-2">
            <UiTextInput name="name" label="Name" />
            <Controller
              name="type"
              control={formMethods?.control}
              render={({ field: { value, onChange } }) => {
                return (
                  <UiSelector
                    label="Select Field Type"
                    value={value}
                    options={availableFields}
                    onChange={onChange}
                    placeholder="Select field"
                  />
                );
              }}
            />
          </div>
          <div className="flex items-center gap-2 mt-2 ">
            <UiButton
              buttonType="secondary"
              text="Cancel"
              className="w-full"
              onClick={handleClose}
            />
            <UiButton
              isLoading={false}
              type="submit"
              text="Submit"
              icon={<ArrowRight className="size-4" />}
              className="w-full"
            />
          </div>
        </form>
      </FormProvider>
    </UiModalContainer>
  );
};

export default AddFieldsModal;
