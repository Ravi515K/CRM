import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
const CallPopupComponent = () => {
    return (_jsx(motion.div, { initial: { opacity: 0, scale: 0.5, y: 80 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.5, y: 80 }, transition: { duration: 0.5 }, className: "bg-black w-[200px] h-[50px] rounded-lg flex items-center justify-center", children: _jsx(motion.div, { className: "bg-offWhite w-[100px] rounded-lg text-center", children: "Inner Div" }) }));
};
export default CallPopupComponent;
