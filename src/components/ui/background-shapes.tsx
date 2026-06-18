import { motion } from "framer-motion";

interface ShapeProps {
  className?: string;
  color?: string;
  size?: number;
  delay?: number;
  opacity?: number;
}

export const CircleOutline = ({
  className,
  color = "#FDB913",
  size = 200,
  delay = 0,
  opacity = 0.3,
}: ShapeProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
    whileInView={{ opacity, scale: 1, rotate: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay, ease: "easeOut" }}
    className={`absolute pointer-events-none flex items-center justify-center ${className}`}
    style={{ width: size, height: size }}
  >
    <motion.div
      animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="w-full h-full"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <circle cx="50" cy="50" r="40" stroke={color} strokeWidth="12" />
      </svg>
    </motion.div>
  </motion.div>
);

export const SolidCircle = ({
  className,
  color = "#E86E3B",
  size = 200,
  delay = 0,
  opacity = 0.3,
}: ShapeProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay, ease: "easeOut" }}
    className={`absolute pointer-events-none flex items-center justify-center ${className}`}
    style={{ width: size, height: size }}
  >
    <motion.div
      animate={{ y: [0, 20, 0], scale: [1, 1.05, 1] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: delay + 1 }}
      className="w-full h-full"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <circle cx="50" cy="50" r="50" fill={color} />
      </svg>
    </motion.div>
  </motion.div>
);

export const ArcShape = ({
  className,
  color = "#FDB913",
  size = 200,
  delay = 0,
  opacity = 0.3,
}: ShapeProps) => (
  <motion.div
    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
    whileInView={{ opacity, rotate: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay, ease: "easeOut" }}
    className={`absolute pointer-events-none flex items-center justify-center ${className}`}
    style={{ width: size, height: size }}
  >
    <motion.div
      animate={{ rotate: [0, 15, 0], y: [0, -10, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: delay + 0.5 }}
      className="w-full h-full"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <path
          d="M 10 90 A 80 80 0 0 1 90 10"
          stroke={color}
          strokeWidth="16"
          strokeLinecap="square"
        />
      </svg>
    </motion.div>
  </motion.div>
);

export const SquigglyLine = ({
  className,
  color = "#7B617E",
  size = 200,
  delay = 0,
  opacity = 0.3,
}: ShapeProps) => (
  <motion.div
    initial={{ opacity: 0, x: -50, scale: 0.8 }}
    whileInView={{ opacity, x: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay, ease: "easeOut" }}
    className={`absolute pointer-events-none flex items-center justify-center ${className}`}
    style={{ width: size, height: size / 3 }}
  >
    <motion.div
      animate={{ x: [0, 20, 0], y: [0, 5, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: delay + 0.2 }}
      className="w-full h-full"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 300 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <path
          d="M 0 30 Q 37.5 -10, 75 30 T 150 30 T 225 30 T 300 30"
          stroke={color}
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M 0 70 Q 37.5 30, 75 70 T 150 70 T 225 70 T 300 70"
          stroke={color}
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </motion.div>
  </motion.div>
);
