import { GripVertical, PencilIcon, Trash2Icon } from "lucide-react";
import { Reorder } from "motion/react";
import { useState } from "react";
import { availableFields } from "../form-builder.constant";
import { FieldType } from "../form-builder.type";
const AllFieldCard = ({
  addField,
}: {
  addField: (item: FieldType) => void;
}) => {
  const [items, setItems] = useState(availableFields);
  return (
    <div>
      <Reorder.Group axis="y" values={items} onReorder={setItems} className="">
        <section className="flex flex-col gap-4">
          {items.map((item) => (
            <Reorder.Item key={item?.id} value={item}>
              <div
                className="flex items-center gap-8 border border-offWhite p-2"
                onClick={() => {
                  addField(item);
                }}
              >
                <GripVertical className="size-4" />
                <p className="text-base text-body font-semibold">
                  {item?.label}
                </p>
                <div className="flex gap-2 ml-auto">
                  <PencilIcon className="size-4" />
                  <Trash2Icon className="size-4" />
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
