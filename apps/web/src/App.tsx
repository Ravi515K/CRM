import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import SidebarWrapper from "./components/Wrappers/SidebarWrapper";
import Home from "./Pages/HomePage/HomePage";
import Activity from "./Pages/HomePage/Components/Activity";
import Opportunity from "./Pages/HomePage/Components/Opportunity";
import { AnimatePresence } from "framer-motion";
import { lazy } from "react";
const HomePageRouting = lazy(() => import("./Pages/HomePage/HomeRouting"));
const FormBuilderPage = lazy(
  () => import("./Pages/FormBuilderPage/FormBuilderPage")
);
function App() {
  return (
    <BrowserRouter>
      <div className="w-full h-screen flex items-start">
        <SidebarWrapper>
          <Routes>
            <Route path="/" element={<HomePageRouting />} />
            <Route path="/form-builder" element={<FormBuilderPage />} />
          </Routes>
        </SidebarWrapper>
      </div>
    </BrowserRouter>
  );
}

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/opportunities" element={<Opportunity />} />
        <Route path="/activity" element={<Activity />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
