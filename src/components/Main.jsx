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
        <div className="text-[#ccc] text-justify leading-loose font-[400] sm:text-[1rem] ">
          <p className="mb-5 sm:mb-3 md:mb-6 lg:mb-5">
            Specializing in modern user-friendly designs that work seamlessly on
            all devices. My focus is on helping businesses enhance their online
            presence and connect effectively to their audience. Dedicated to
            delivering high-quality solutions, each project is customized to
            meet the specific needs of the business, ensuring that their website
            is not only visually appealing but also effective in achieving their
            goals.
          </p>
          <p>
            Check out the portfolio to see examples of successful projects and
            learn how a customized website can elevate your brand and drive
            growth.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-5 sm:gap-10 lg:flex-row z-40">
        <div className="w-[280px] sm:w-[240px] md:w-[280px] lg:w-[330px] mt-8 sm:mt-0 ">
          <img
            className="w-full h-full"
            src={myImage}
            alt="main"
            title="React Developer"
          />
        </div>
        <div className="flex flex-row justify-center lg:flex-col mt-8 sm:mt-0 gap-6 ">
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/abdulrahmanfa2hy/"
            target="_blank"
            title="LinkedIn"
          >
            <FaLinkedinIn size={40} className="cursor-pointer" />
          </a>
          <a
            rel="noreferrer"
            href="https://github.com/AbdulrahmanFa2hy"
            target="_blank"
            title="GitHub"
          >
            <FaGithub size={40} className="cursor-pointer" />
          </a>
          <a
            rel="noreferrer"
            href="https://wa.me/201158371316"
            target="_blank"
            title="WhatsApp"
          >
            <FaWhatsapp size={40} className="cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;
