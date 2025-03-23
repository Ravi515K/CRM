import { Columns3, Home, Settings } from "lucide-react";
import { ISideBarSchema } from "./global.types";
const SIDE_BAR: ISideBarSchema[] = [
  {
    id: "1",
    code: "home",
    name: "Home",
    icon: <Home className="size-6" />,
    path: "/",
  },
  {
    id: "2",
    code: "form-builder",
    name: "Form Builder",
    icon: <Columns3 className="size-6" />,
    path: "/form",
  },
  {
    id: "7",
    code: "settings",
    name: "Settings",
    icon: <Settings className="size-6" />,
    path: "/settings",
  },
];
export { SIDE_BAR };
