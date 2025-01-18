import SidebarWrapper from "./components/SidebarWrapper";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="w-full h-screen flex items-start">
      <SidebarWrapper>
        <Home />
      </SidebarWrapper>
    </div>
  );
}

export default App;
