import ToolTipWrapper from "../Wrappers/TooltipWrapper";
import { useNavigate } from "react-router";
const SideTab = ({ sideTab, open }: any) => {
  const navigate = useNavigate();
  return (
    <ToolTipWrapper text={sideTab?.name} isOpen={open}>
      <section
        className="flex gap-2"
        onClick={() => navigate(`${sideTab?.path}`)}
      >
        <div className="">{sideTab?.icon}</div>
        {open && <h3 className="text-subHeading">{sideTab?.name}</h3>}
      </section>
    </ToolTipWrapper>
  );
};

export default SideTab;
