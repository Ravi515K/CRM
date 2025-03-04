import { GripVertical, Trash2Icon } from "lucide-react";
import { Reorder } from "motion/react";
import { useContext } from "react";
import { FormBuilderContext } from "../../../context/FormBuilderContext";
const AllFieldCard = () => {
  const formBuilderContext = useContext(FormBuilderContext);

  return (
    <div>
      <Reorder.Group
        axis="y"
        values={formBuilderContext?.formFields || []}
        onReorder={formBuilderContext?.setFormFields}
        className=""
      >
        <section className="flex flex-col gap-4">
          {formBuilderContext?.formFields?.map((item) => (
            <Reorder.Item key={item?.id} value={item}>
              <div className="flex items-center gap-8 border border-offWhite p-2">
                <GripVertical className="size-4" />
                <p className="text-base text-body font-semibold">
                  {item?.label}
                </p>
                <div className="flex gap-2 ml-auto">
                  <Trash2Icon
                    className="size-4"
                    onClick={() => {
                      formBuilderContext?.deleteField(Number(item?.id));
                    }}
                  />
                </div>
              </div>
            </Reorder.Item>
          ))}
        </section>
      </Reorder.Group>
    </div>
  );
};

export default AllFieldCard;
