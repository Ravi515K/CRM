import { Dispatch, SetStateAction } from "react";
import { SIDE_BAR } from "../global.constant";
import { ISideBarSchema } from "../global.types";
import { PanelLeftOpen, PanelRightOpen } from "lucide-react";
const SideBar = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <aside className=" flex flex-col w-full h-full">
      <button
        className="flex items-center gap-6 py-2 w-full"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? (
          <PanelLeftOpen className="size-6" />
        ) : (
          <PanelRightOpen className="size-6" />
        )}
      </button>
      {SIDE_BAR?.map((sideTab: ISideBarSchema) => {
        const sideName = sideTab?.code === "settings";
        return (
          <button
            data-setting={sideName}
            className="flex items-center gap-6 py-2 w-full data-[setting=true]:relative top-[200px]"
            key={sideTab?.id}
          >
            <div className="">{sideTab?.icon}</div>
            {open && <h3 className="text-subHeading">{sideTab?.name}</h3>}
          </button>
        );
      })}
    </aside>
  );
};

export default SideBar;
