import { useRef } from "react";
import emailjs from "@emailjs/browser";
import GmailCopy from "./GmailCopy";
import { toast } from "react-toastify";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rf8yy2b",
        "template_xqwd32u",
        form.current,
        "TU70aafdCjvaCj-zl"
      )
      .then(
        () => {
          toast.success("Message Sent.");
          e.target.reset();
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };

  return (
    <div
      id="contact"
      className="flex flex-col gap-6 w-full px-4 sm:px-8 md:px-16 mt-28"
    >
      <div className="flex flex-col text-center">
        <h1 className="tracking-wider font-[600] ext-[1.4rem] md:text-[2rem]">
          Contact Me
        </h1>
        <GmailCopy />
      </div>
      <form
        className="flex flex-col gap-4 w-full lg:w-[85%] m-auto "
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            className="p-4 rounded-[4px] bg-[#3d3e4b] h-[58px]"
            placeholder="Name"
            type="text"
            name="user_name"
            required
          />
          <input
            className="p-4 rounded-[4px] bg-[#3d3e4b] h-[58px]"
            placeholder="Email"
            type="email"
            name="user_email"
            required
          />
        </div>
        <textarea
          className="p-4 bg-[#343541] h-[280px] resize-none rounded-[4px]"
          placeholder="Your message"
          type="text"
          name="message"
          required
        />
        <button
          type="submit"
          className="w-fit max-w-full flex justify-center px-[1.9rem] py-[.5rem] sm:px-[3em] sm:py-[.8rem] my-2 bg-[#ec6e59] coursor-pointer rounded-[4px]"
        >
          Send
        </button>
      </form>

      <footer className="flex items-center justify-center text-[0.6rem] leading-loose sm:text-[1rem]  tm:text-[1rem] pb-4 font-serif ">
        © 2024
        <span className="mx-2 text-[400] px-2 border-b-2 border-b-[#ec6e59] transform -skew-x-12 cursor-pointer">
          A.Fathy
        </span>
        All Rights Reserved.
      </footer>
    </div>
  );
}

export default Contact;
