import { useState } from 'react';
const useToggleHandler = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleHandler = () => {
        setIsOpen(!isOpen);
    };
    return {
        toggleHandler,
        isOpen
    };
};
export default useToggleHandler;
