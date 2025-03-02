import { Reorder } from "motion/react";
import { useState } from "react";
const FieldCard = () => {
    const [items, setItems] = useState([0, 1, 2, 3])
  return (
    <div>
      <Reorder.Group axis="y" values={items} onReorder={setItems}>
        {items.map((item) => (
          <Reorder.Item key={item} value={item}>
            {item}
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
};

export default FieldCard;
