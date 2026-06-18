"use client";
import { motion, useInView } from "framer-motion";
import { ReactNode } from "react";

interface TimelineContentProps {
  children: ReactNode;
  animationNum: number;
  timelineRef: React.RefObject<HTMLElement | null>;
  className?: string;
  as?: React.ElementType;
  customVariants: {
    visible: (i: number) => any;
    hidden: any;
  };
}

export function TimelineContent({
  children,
  animationNum,
  timelineRef,
  className,
  as: Component = "div",
  customVariants,
}: TimelineContentProps) {
  const isInView = useInView(timelineRef as any, { once: true, margin: "-10% 0px" });

  const tags: Record<string, any> = {
    h1: motion.h1,
    h2: motion.h2,
    h3: motion.h3,
    p: motion.p,
    div: motion.div,
    section: motion.section,
    article: motion.article,
    span: motion.span,
  };

  const MotionComponent =
    typeof Component === "string" && tags[Component] ? tags[Component] : motion(Component as any);

  return (
    <MotionComponent
      className={className}
      custom={animationNum}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={customVariants}
    >
      {children}
    </MotionComponent>
  );
}
