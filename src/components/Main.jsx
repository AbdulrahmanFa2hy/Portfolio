import myImage from "../assets/main_photo.png";
import { FaLinkedinIn, FaWhatsapp, FaGithub } from "react-icons/fa";
import Typewriter from "./Typewriter";

function Main() {
  return (
    <div
      id="main"
      className="flex flex-col sm:flex-row justify-between items-center gap-10 sm:gap-5 md:gap-10 h-fit lg:h-[80vh] mt-[115px] px-4 sm:px-8 md:px-20"
    >
      <div className="flex flex-col justify-center sm:w-[55%] lg:max-w-[46%] ">
        <div className="font-[400] text-[1.8rem] sm:text-[2rem]">Hi,</div>
        <div className="sm:flex items-center gap-3 font-extrabold text-[1.8rem] sm:text-[2rem] lg:text-[2.4rem] mb-8">
          <p className="text-[#ec6e59]">I'm</p>
          <p className="title relative z-10 px-3 py-2 text-[#20262E] w-fit max-w-full">
            Abdulrahman
          </p>
        </div>
        <Typewriter />
        <p className="text-[#ccc] text-justify leading-loose font-[400] sm:text-[1rem]">
          I am passionate about building websites and web applications. With a
          degree from the Faculty of Navigation Science and Space Technology,
          NSST-Beni Sueif, I have honed my technical skills through diverse
          projects, both individually and in teams. I have developed web
          applications using technologies such as JavaScript, React.js, Redux
          Toolkit, Next.js, Sass, Bootstrap, Tailwind CSS, Figma, Git, and
          GitHub.
        </p>
      </div>
      <div className="flex flex-col gap-5 sm:gap-12 lg:flex-row">
        <div className="w-[280px] sm:w-[250px] md:w-[280px] lg:w-[330px] mt-8 sm:mt-0">
          <img className="w-full h-full" src={myImage} alt="main" />
        </div>
        <div className="flex flex-row justify-center lg:flex-col mt-8 sm:mt-0 gap-6 ">
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/abdulrahmanfa2hy/"
            target="_blank"
          >
            <FaLinkedinIn size={40} className="cursor-pointer" />
          </a>
          <a
            rel="noreferrer"
            href="https://github.com/AbdulrahmanFa2hy"
            target="_blank"
          >
            <FaGithub size={40} className="cursor-pointer" />
          </a>
          <a rel="noreferrer" href="https://wa.me/201158371316" target="_blank">
            <FaWhatsapp size={40} className="cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;
