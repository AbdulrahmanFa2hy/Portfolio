import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbWorldCode } from "react-icons/tb";
import { HiOutlineExternalLink } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleShowingNavbar = () => {
      if (typeof window.scrollY !== "undefined") {
        if (window.scrollY < lastScrollY) {
          // on scroll up
          setShowNavbar(true);
        } else setShowNavbar(false); // on scroll down

        // update the latest scrollY state
        setLastScrollY(window.scrollY);
      }
    };
    window.addEventListener("scroll", handleShowingNavbar);

    return () => {
      window.removeEventListener("scroll", handleShowingNavbar);
    };
  }, [lastScrollY]);

  const scrollToComponent = (componentId) => {
    const component = document.getElementById(componentId);
    if (component) {
      component.scrollIntoView({
        behavior: "smooth",
        duration: 2000,
        block: "start",
        inline: "nearest",
      });
    }
  };

  // to handle window resize for mobile view
  useEffect(() => {
    const handleWindowResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 640 && showMenu) {
        setShowMenu(false);
      }
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [showMenu]);

  return (
    <>
      <div
        className={`flex justify-between items-center w-full py-[1rem] md:py-[1.5rem] px-16 sm:px-8 md:px-20 z-20  transition duration-700 ease-in-out fixed top-0 left-0 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } ${
          lastScrollY > 100 &&
          "bg-[rgba(18,22,26,0.95)]  shadow-sm shadow-[rgb(18,22,26)]"
        }`}
      >
        <TbWorldCode
          alt="logo"
          className="h-[2rem] w-[2rem]"
          onClick={() => window.scrollTo(0, 0)}
        />
        {!showMenu && (
          <ul className="hidden sm:flex font-[400] text-white text-custom-20 gap-[1.8rem] md:gap-[4rem] lg:gap-[4.5rem]">
            <li
              className="tracking-wide hover:after:bg-[#ec6e59;] font-[400]"
              onClick={() => scrollToComponent("projects")}
            >
              Projects
            </li>
            <li
              className="tracking-wider hover:after:bg-[#ec6e59;] font-[400]"
              onClick={() => scrollToComponent("skills")}
            >
              Skills
            </li>
            <li
              className="tracking-wider hover:after:bg-[#ec6e59;] font-[400]"
              onClick={() => scrollToComponent("contact")}
            >
              Contact
            </li>
            <a
              href="https://drive.google.com/drive/folders/1TZzWaO1goGscmOZ__jZNodc3RfuJOUkb"
              target="_blank"
            >
              <li className="flex items-center gap-1 tracking-wider hover:after:bg-[#ec6e59;] hover:after:w-full font-[400]">
                CV <HiOutlineExternalLink />
              </li>
            </a>
          </ul>
        )}
        <GiHamburgerMenu
          className="sm:hidden min-h-[35px] w-6 cursor-pointer "
          onClick={() => setShowMenu(!showMenu)}
        />

        {/* Mobile View */}
      </div>
      <div
        className={`fixed top-0 left-0 w-full h-[100vh] transform ${
          showMenu ? " translate-y-0" : "translate-y-full"
        } z-50 bg-[#0e1114] transition-all duration-300 ease-in-out overflow-hidden`}
      >
        <IoClose
          className="h-8 w-8 absolute top-[2rem] right-[3rem] cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        />
        <ul className="flex flex-col justify-start items-center gap-16 mt-32 h-full font-[400]">
          <li
            className="relative w-[160px]"
            onClick={() => {
              setShowMenu(false);
              scrollToComponent("projects");
            }}
          >
            <div className="absolute inset-2 bg-[#ec6e59] transform skew-y-[-3deg]"></div>
            <span className="tracking-wider py-[1rem] w-full flex justify-center items-center relative">
              Projects
            </span>
          </li>
          <li
            className="relative w-[160px]"
            onClick={() => {
              setShowMenu(false);
              scrollToComponent("skills");
            }}
          >
            <div className="absolute inset-2 bg-[#ec6e59] transform skew-y-[-3deg]"></div>
            <span className="tracking-wider py-[1rem] w-full flex justify-center items-center relative">
              Skills
            </span>
          </li>
          <li
            className="relative w-[160px]"
            onClick={() => {
              setShowMenu(false);
              scrollToComponent("contact");
            }}
          >
            <div className="absolute inset-2 bg-[#ec6e59] transform skew-y-[-3deg]"></div>
            <span className="tracking-wider py-[1rem] w-full flex justify-center items-center relative">
              Contact
            </span>
          </li>
          <a
            className="cursor-pointer w-full flex justify-center items-center"
            href="https://drive.google.com/drive/folders/1TZzWaO1goGscmOZ__jZNodc3RfuJOUkb"
            target="_blank"
            onClick={() => setShowMenu(false)}
          >
            <li
              className="relative w-[160px]"
              onClick={() => {
                setShowMenu(false);
              }}
            >
              <div className="absolute inset-2 bg-[#ec6e59] transform skew-y-[-3deg]"></div>
              <span className="tracking-wider py-[1rem] w-full flex justify-center items-center gap-1 relative">
                CV <HiOutlineExternalLink />
              </span>
            </li>
          </a>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
