import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import SideBar from "../Sidebar/SideBar";

const SidebarWrapper = ({ children }: { children?: any }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-full flex gap-5 px-2">
      <section
        data-collapse={open}
        className="w-[200px] data-[collapse=false]:w-[50px] h-full bg-offWhite"
      >
        <SideBar open={open} setOpen={setOpen} />
      </section>
      <section className="flex flex-col gap-4 flex-1">
        <Navbar />
        {children}
      </section>
    </div>
  );
};

export default SidebarWrapper;
