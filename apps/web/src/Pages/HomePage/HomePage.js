import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AnimatePresence } from "framer-motion";
import CallPopupComponent from "../../components/CallPopupComponent/CallPopupComponent";
const Home = () => {
    return (_jsxs("div", { className: "w-full h-screen relative border", children: [_jsx("h1", { className: "text-base text-primary", children: "Home Page" }), _jsx("div", { className: "w-full absolute bottom-10 right-0 flex items-center justify-center", children: _jsx(AnimatePresence, { mode: "wait", children: _jsx(CallPopupComponent, {}) }) })] }));
};
export default Home;
