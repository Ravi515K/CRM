import ToolTipWrapper from "../Wrappers/TooltipWrapper";
const SideTab = ({ sideTab, open }: any) => {
 
  return (
    <ToolTipWrapper text={sideTab?.name} isOpen={open}>
      <section
        className="flex gap-2"
        // onClick={() => navigate(`/${sideTab?.code}`)}
      >
        <div className="">{sideTab?.icon}</div>
        {open && <h3 className="text-subHeading">{sideTab?.name}</h3>}
      </section>
    </ToolTipWrapper>
  );
};

export default SideTab;
