import { motion } from "framer-motion";
import skills from "../data/skillsData";

export default function SkillSection() {
  const FadeContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0, staggerChildren: 0.1 },
    },
  };

  const popUp = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        duration: 2,
      },
    },
  };
  const headingFromLeft = {
    hidden: { x: -200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        type: "spring",
        stiffness: 70,
      },
    },
  };

  const AnimatedHeading = ({ variants, className, children, infinity }) => {
    return (
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: !infinity }}
        variants={variants}
        className={className}
      >
        {children}
      </motion.h1>
    );
  };

  return (
    <div id="skills" className="font-bold px-4 sm:px-8 md:px-20 h-fit">
      <AnimatedHeading
        className="w-full mb-10 text-2xl sm:text-3xl font-bold"
        variants={headingFromLeft}
      >
        My Top Skills
      </AnimatedHeading>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={FadeContainer}
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 gap-4"
      >
        {skills.map((skill, index) => {
          const Icon = skill.Icon;
          return (
            <motion.div
              variants={popUp}
              key={index}
              title={skill.name}
              className="flex items-center justify-center gap-4 p-4 origin-center transform border border-gray-300 rounded-sm sm:justify-start bg-transparent hover:bg-[#121519] dark:bg-darkPrimary hover:dark:bg-darkSecondary dark:border-neutral-700 md:origin-top group"
            >
              <Icon className="w-8 h-8" title={skill.name} />
              {/* <div className="relative transition pointer-events-none select-none group-hover:scale-110 sm:group-hover:scale-100"></div> */}
              <p className="hidden text-sm font-semibold pointer-events-none select-none sm:inline-flex md:text-base">
                {skill.name}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
