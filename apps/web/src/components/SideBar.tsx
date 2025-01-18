import { Dispatch, SetStateAction } from "react";
import { SIDE_BAR } from "../global.constant";
import { ISideBarSchema } from "../global.types";
import { PanelLeftOpen, PanelRightOpen } from "lucide-react";
import * as motion from "motion/react-client";
import SideTab from "./SideTab";
const SideBar = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0.5, scale: 1 }}
      animate={{ opacity: 0.7, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
      exit={{ opacity: 0, scale: 0, width: 0 }}
      key="box"
      data-open={open}
      className="w-full h-full flex flex-col  data-[open=false]:items-center"
    >
      <aside>
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
          const isSettingTab = sideTab?.code === "settings";
          return (
            <button
              key={sideTab?.id}
              data-setting={isSettingTab}
              className="flex items-center gap-6 py-4 w-full data-[setting=true]:relative data-[setting=true]:top-[200px]"
            >
              <SideTab sideTab={sideTab} open={open} />
            </button>
          );
        })}
      </aside>
    </motion.div>
  );
};

export default SideBar;
