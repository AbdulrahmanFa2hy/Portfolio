import Main from "./components/Main";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import BackgroundView from "./Layout/BackgroundView";
import SkillSection from "./components/SkillSection";
import { FiChevronsUp } from "react-icons/fi";
import { useEffect, useState } from "react";
import ToastProvider from "./components/ToastProvider";
import { div } from "framer-motion/client";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 600) {
      setIsVisible(true);
    } else setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <BackgroundView />
      <ToastProvider />
      <div className="font-poppins select-none text-black bg-white dark:bg-[#20262E] dark:text-white  transition duration-500">
        <Navbar />
        <Main />
        <Projects />
        <SkillSection />
        <Contact />
        {isVisible && (
          <div
            className={`fixed bottom-3 right-3 w-[60px] h-[60px] flex justify-center items-center rounded-[30%] cursor-pointer transition-all duration-300 ease-in-out`}
            onClick={() => window.scrollTo(0, 0)}
          >
            <FiChevronsUp className="bg-[#ec6e59] rounded-[30%] w-9 h-9 p-[4px] shadow-xl" />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
