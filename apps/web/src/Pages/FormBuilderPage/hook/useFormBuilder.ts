import { useState } from "react";

const useFormBuilder = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Functions

  const toggleFieldModal = () => {
    setIsOpen((prev) => !prev);
  };
  return {
    states: {
      isOpen,
      setIsOpen,
    },
    functions: { toggleFieldModal },
  };
};

export default useFormBuilder;
