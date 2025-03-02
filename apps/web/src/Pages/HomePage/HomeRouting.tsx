import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const HomePage = lazy(() => import("./HomePage"));
const ActivitySubPage = lazy(() => import("./Components/Activity"));
const OpportunitySubPage = lazy(() => import("./Components/Activity"));
const HomeRouting = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/activity" element={<ActivitySubPage />} />
      <Route path="/opportunity" element={<OpportunitySubPage />} />
    </Routes>
  );
};

export default HomeRouting;
