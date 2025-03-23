import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SidebarWrapper from "./components/Wrappers/SidebarWrapper";
import { FormBuilderContextProvider } from "./context/FormBuilderContext";
import HomeRouting from "./Pages/HomePage/HomeRouting";
const FormBuilderPage = lazy(
  () => import("./Pages/FormBuilderPage/FormBuilderPage")
);
function App() {
  return (
    <BrowserRouter>
      <FormBuilderContextProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="w-full flex items-start">
            <SidebarWrapper>
              <Routes>
                <Route path="/*" element={<HomeRouting />} />
                <Route path="/form" element={<FormBuilderPage />} />
              </Routes>
            </SidebarWrapper>
          </div>
        </Suspense>
      </FormBuilderContextProvider>
    </BrowserRouter>
  );
}

// const AnimatedRoutes = () => {
//   const location = useLocation();

//   return (
//     <AnimatePresence mode="wait">
//       <Routes location={location} key={location.pathname}>
//         <Route path="/" element={<Home />} />
//         <Route path="/opportunities" element={<Opportunity />} />
//         <Route path="/activity" element={<Activity />} />
//       </Routes>
//     </AnimatePresence>
//   );
// };

export default App;
