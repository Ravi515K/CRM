import {
  UiButton,
  UiModalContainer,
  UiSelector,
  UiTextInput,
} from "@repo/ui/components";
import { ArrowRight } from "lucide-react";
import { useContext } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { FormBuilderContext } from "../../../../context/FormBuilderContext";
import {
  fieldTypeArr,
  gridSizeArr,
  inputTypeArr,
} from "../../form-builder.constant";
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
    const { label, type, placeholder, field_key, grid_size } = data;
    const fieldData = {
      id:
        (formBuilderContext?.formFields &&
          formBuilderContext?.formFields?.length + 1) ||
        "1",
      name: label.toLowerCase(),
      placeholder: placeholder,
      grid_size: grid_size,
      label: label,
      type: type?.code,
      field_key: field_key,
      ...(type?.code === "input" && {
        max: data?.max,
        min: data?.min,
        input_type: data?.input_type?.code,
      }),
      ...(type?.code === "selector" && { options: data?.options }),
    };
    formBuilderContext?.addField(fieldData);
    handleClose();
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
          className="flex flex-col gap-4 w-[500px] "
        >
          <div className="flex flex-col gap-4  ring-1 ring-offWhite rounded  p-2 h-[calc(100vh-230px)] overflow-y-auto">
            <UiTextInput name="label" label="Label" />
            <Controller
              name="type"
              control={formMethods?.control}
              render={({ field: { value, onChange } }) => {
                return (
                  <UiSelector
                    label="Field Type"
                    value={value}
                    options={fieldTypeArr}
                    onChange={onChange}
                    placeholder="Select field"
                  />
                );
              }}
            />
            {formMethods?.watch("type")?.code === "input" && (
              <>
                <Controller
                  name="input_type"
                  control={formMethods?.control}
                  render={({ field: { value, onChange } }) => {
                    return (
                      <UiSelector
                        label="Input Type"
                        value={value}
                        options={inputTypeArr}
                        onChange={onChange}
                        placeholder="Select field"
                      />
                    );
                  }}
                />
                {formMethods?.watch("input_type")?.code !== "date" && (
                  <>
                    <UiTextInput name="min" label="Min Length" />
                    <UiTextInput name="max" label="Max Length" />
                  </>
                )}
              </>
            )}
            {!["date"].includes(formMethods?.watch("input_type")?.code) && (
              <UiTextInput name="placeholder" label="PlaceHolder" />
            )}
            <UiTextInput name="field_key" label="Field Key" />
            <Controller
              name="grid_size"
              control={formMethods?.control}
              render={({ field: { value, onChange } }) => {
                return (
                  <UiSelector
                    label="Grid Size"
                    value={value}
                    options={gridSizeArr}
                    onChange={onChange}
                    placeholder="Select Grid Size"
                  />
                );
              }}
            />
            {formMethods?.watch("type")?.code === "selector" && (
              <UiTextInput name="options" label="Options" />
            )}
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
