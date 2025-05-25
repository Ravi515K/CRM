import { AnimatePresence } from "framer-motion";
import CallPopupComponent from "../../components/CallPopupComponent/CallPopupComponent";

const Home = () => {
  return (
    <div className="w-full h-screen relative">
      <h1 className="text-base text-primary">Home Page</h1>
      <div className="w-full absolute bottom-10 right-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <CallPopupComponent />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Home;
