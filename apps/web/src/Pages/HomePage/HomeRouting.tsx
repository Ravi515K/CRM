import { lazy } from "react";
import { Route , Routes} from "react-router-dom";
const HomePage = lazy(() => import("./HomePage"));
const ActivitySubPage = lazy(() => import("./Components/Activity"));
const OpportunitySubPage = lazy(() => import("./Components/Activity"));
const HomeRouting = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="activity" element={<ActivitySubPage />} />  {/* No "/" before path */}
        <Route path="opportunity" element={<OpportunitySubPage />} />
      </Routes>
  );
};

export default HomeRouting;
