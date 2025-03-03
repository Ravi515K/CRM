import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { NAVBAR_MENU } from "./Navbar.constant";
import * as motion from "motion/react-client";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const [selectedTab, setSelectedTab] = useState(NAVBAR_MENU[0]);
    const navigate = useNavigate();
    return (_jsxs("div", { className: "pt-6 flex flex-col gap-5", children: [_jsx("h1", { className: "text-[24px] text-heading", children: "Welcome to CRM" }), _jsx("section", { className: "w-[500px]  ", children: _jsx("ul", { className: "flex justify-between w-[300px] list-none border-b-lightGray border-b-2", children: NAVBAR_MENU?.map((item) => {
                        return (_jsxs(motion.li, { onClick: () => {
                                setSelectedTab(item);
                                if (item?.code !== "home") {
                                    navigate(`/${item?.code}`);
                                }
                                else {
                                    navigate("/");
                                }
                            }, initial: false, animate: {
                                backgroundColor: item.id === selectedTab?.id ? "#eee" : "#eee0",
                            }, className: "text-base text-success relative cursor-pointer p-2 ", children: [item?.name, item.id === selectedTab.id ? (_jsx(motion.div, { className: "absolute bottom-[-2] left-0 right-0 h-2  border-b-blue-600 border-b-4 " })) : null] }, item?.id));
                    }) }) })] }));
};
export default Navbar;
