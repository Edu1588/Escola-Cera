import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SmoothRevealTextProps {
  text: string;
  as?: React.ElementType;
  className?: string;
}

export function SmoothRevealText({
  text,
  as: Component = "h2",
  className = "",
}: SmoothRevealTextProps) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.02 },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(4px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const MotionComponent = motion(Component as any);

  return (
    <MotionComponent
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      className={className}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
          {word.split("").map((letter, letterIndex) => (
            <motion.span variants={child} key={letterIndex} className="inline-block">
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </MotionComponent>
  );
}
