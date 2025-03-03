import {
  UiButton,
  UiDrawerWrapper,
  UiSelector,
  UiTextInput
} from "@repo/ui/components";
import { ArrowRight } from "lucide-react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { availableFields } from "../../form-builder.constant";
const AddFieldsModal = ({
  isOpen,
  handleClose,
  handleSubmit,
}: {
  isOpen: boolean;
  handleClose: () => void;
  handleSubmit: (data: any) => void;
}) => {
  const formMethods = useForm<any>();
  return (
    <UiDrawerWrapper
      isOpen={isOpen}
      HeadSection={
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
          className="flex flex-col gap-4"
        >
          <div className="grid grid-cols-2  ring-1 ring-offWhite rounded  px-2">
            <UiTextInput name="name" label="Name" />
            <Controller
              name="type"
              control={formMethods?.control}
              render={({ field: { value, onChange } }) => {
                return (
                  <UiSelector
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
    </UiDrawerWrapper>
  );
};

export default AddFieldsModal;
