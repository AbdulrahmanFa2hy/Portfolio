import myImage from "../assets/main_photo.png";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Typewriter from "./Typewriter";

function Main() {
  return (
    <div
      id="main"
      className="flex flex-col sm:gap-10 sm:flex-row sm:items-center justify-center min-h-[80vh] px-4 sm:px-8 md:px-20 mt-[95px] sm:mt-[115px]]"
    >
      <div className="flex flex-col justify-center sm:w-[70%] md:w-[50%] w-full">
        <div className="font-[400] text-[1.8rem] sm:text-[2rem]">Hi,</div>
        <div className="sm:flex items-center gap-3 font-extrabold text-[1.8rem] sm:text-[2rem] lg:text-[2.4rem] mb-5">
          <p className="text-[#ec6e59]">I'm</p>
          <p className="title relative z-10 px-3 py-2 text-[#20262E] w-fit max-w-full">
            Abdulrahman
          </p>
        </div>
        <div className="h-10 mt-4">
          <Typewriter />
        </div>
        <p className="dark:text-[#ccc] text-justify leading-loose pt-5 font-[400] mt-[-.8rem] sm:text-[1rem] px-2 sm:px-0 sm:w-full md:w-[70%] sm:min-w-[300px] sm:mt-0">
          I am passionate about building websites and web applications. With a
          degree in Computer Science from SEECS, NUST, I have honed my technical
          skills through diverse projects, both individually and in teams. I
          have built end-to-end web and mobile applications using technologies
          such as Figma, Webflow, JavaScript, ReactJS, Next.js, Sass, Bootstrap,
          Tailwind CSS, Flutter, Dart, NodeJS, Git, MongoDB, and MySQL.
        </p>
      </div>
      <div className="max-w-[300px] max-h-[350px] sm:min-w-[250px] md:max-h-[500px] md:max-w-[350px] mx-auto  mt-4 md:mt-0">
        <img className="w-full " src={myImage} alt="main" />
      </div>
      <div className="flex place-content-center mt-7 ">
        <div className="flex flex-row sm:flex-col gap-4">
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/abdulrahmanfa2hy/"
            target="_blank"
          >
            <AiFillLinkedin size={40} className="cursor-pointer" />
          </a>
          <a
            rel="noreferrer"
            href="https://github.com/AbdulrahmanFa2hy"
            target="_blank"
          >
            <AiFillGithub size={40} className="cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;
