import { useState } from "react";
import SideBar from "../Sidebar/SideBar";

const SidebarWrapper = ({ children }: { children?: any }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-full flex px-2">
      <section
        data-collapse={open}
        className="w-[200px] data-[collapse=false]:w-[50px] h-full bg-offWhite z-50 relative"
      >
        <SideBar open={open} setOpen={setOpen} />
      </section>
      <section className="flex flex-col gap-4 flex-1 border z-1">
        {children}
      </section>
    </div>
  );
};

export default SidebarWrapper;
