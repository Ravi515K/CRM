import { UiButton, UiSelector, UiTextInput } from "@repo/ui/components";
import { ArrowRight } from "lucide-react";
import { useContext } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { FormBuilderContext } from "../../../../context/FormBuilderContext";
import { fieldTypeArr, gridSizeArr } from "../../form-builder.constant";

const RightFieldSection = () => {
  const formMethods = useForm();
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
        input_type: data?.input_type,
      }),
      ...(type?.code === "selector" && { options: data?.options }),
    };
    formBuilderContext?.addField(fieldData);
  };
  return (
    <div className="w-1/4 rounded-md p-4 bg-white">
      <h2 className="font-bold mb-2">Edit Field</h2>
      {formBuilderContext?.selectedField ? (
        <FormProvider {...formMethods}>
          <form
            onSubmit={formMethods.handleSubmit(handleSubmit)}
            className="flex flex-col gap-4 w-full"
          >
            <div className="flex flex-col gap-4  ring-1 ring-offWhite rounded  p-2">
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

              <UiTextInput name="placeholder" label="PlaceHolder" />
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
              {formMethods?.watch("type")?.code === "input" && (
                <>
                  <UiTextInput
                    name="input_type"
                    label="Input Type"
                    placeholder="eg:input or email"
                  />
                  <UiTextInput name="max" label="Max Length" />
                  <UiTextInput name="min" label="Min Length" />
                </>
              )}
            </div>
            <div className="flex items-center justify-between gap-2 mt-2 w-full">
              <UiButton
                isLoading={false}
                text="Cancel"
                className=" bg-green-700 w-1/2"
                buttonType="secondary"
              />
              <UiButton
                isLoading={false}
                type="submit"
                text="Save"
                className=" bg-green-700 w-1/2"
              />
            </div>
          </form>
        </FormProvider>
      ) : (
        <div className="flex flex-col gap-4">
          <p>Select a field to edit field</p>
          <UiButton
            isLoading={false}
            type="submit"
            text="Save"
            icon={<ArrowRight className="size-4" />}
            className="w-full bg-green-700"
          />
        </div>
      )}
    </div>
  );
};

export default RightFieldSection;
