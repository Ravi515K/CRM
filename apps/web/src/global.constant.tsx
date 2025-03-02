import { Activity, Columns3, File, HandshakeIcon, Home, Ratio, Settings, UserPlus } from 'lucide-react';
import { ISideBarSchema } from './global.types';
const SIDE_BAR: ISideBarSchema[] = [
  { id: "1", code: "home", name: "Home", icon: <Home  className='size-6'/>, path: "/home" },
  { id: "2", code: "Leads", name: "Lead", icon:<UserPlus className="size-6"/>, path: "/leads" },
  { id: "3", code: "customer", name: "Customer", icon: <HandshakeIcon  className="size-6"/>, path: "/home" },
  { id: "4", code: "opportunity", name: "Opportunity", icon: <Activity className="size-6"/>, path: "/opportunity" },
  { id: "5", code: "products", name: "Products", icon: <Ratio className="size-6"/>, path: "/products" },
  { id: "6", code: "reports", name: "Reports", icon: <File className="size-6"/>, path: "/Reports" },
  { id: "6", code: "form-builder", name: "Form Builder", icon: <Columns3 className="size-6"/>, path: "/Reports" },
  { id: "7", code: "settings", name: "Settings", icon: <Settings className="size-6"/>, path: "/settings" },
];
export { SIDE_BAR };
