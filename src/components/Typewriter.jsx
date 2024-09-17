import { useState, useEffect } from "react";

const Typewriter = () => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentString, setCurrentString] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const strings = ["Front End", "ReactJS", "NextJS"];

    if (isTyping) {
      if (currentString === strings[currentStringIndex]) {
        setTimeout(() => {
          setIsTyping(false);
        }, 500); // Adjust the pause duration before erasing (in milliseconds)
      } else {
        const timeout = setTimeout(() => {
          setCurrentString(
            strings[currentStringIndex].slice(0, currentString.length + 1)
          );
        }, 100); // Adjust the typing speed here (in milliseconds)

        return () => clearTimeout(timeout);
      }
    } else {
      if (currentString === "") {
        setCurrentStringIndex((prevIndex) => (prevIndex + 1) % strings.length);
        setIsTyping(true);
      } else {
        const timeout = setTimeout(() => {
          setCurrentString(currentString.slice(0, currentString.length - 1));
        }, 50); // Adjust the erasing speed here (in milliseconds)

        return () => clearTimeout(timeout);
      }
    }
  }, [currentString, currentStringIndex, isTyping]);

  return (
    <div className="flex items-center h-10 w-[200px] font-[500] text-[#ec6e59;] text-[1.5rem] sm:text-[2rem] mb-2">
      {currentString}
    </div>
  );
};

export default Typewriter;
