import ToolTipWrapper from "./Wrappers/TooltipWrapper";

const SideTab = ({ sideTab, open }: any) => {
  return (
    <ToolTipWrapper text={sideTab?.name} isOpen={open}>
     <div className="">{sideTab?.icon}</div>
     {open && <h3 className="text-subHeading">{sideTab?.name}</h3>}
    </ToolTipWrapper>
  );
};

export default SideTab;
