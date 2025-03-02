import { lazy } from "react";
import { Route } from "react-router-dom";
const HomePage = lazy(() => import("./HomePage"));
const ActivitySubPage = lazy(() => import("./Components/Activity"));
const OpportunitySubPage = lazy(() => import("./Components/Activity"));
const HomeRouting = () => {
  return (
    <Route path="/">
      <Route index element={<HomePage />} />
      <Route path="activity" element={<ActivitySubPage />} />
      <Route path="opportunity" element={<OpportunitySubPage />} />
    </Route>
  );
};

export default HomeRouting;
