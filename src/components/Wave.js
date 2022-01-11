import React from "react";
import { motion } from "framer-motion";

const Wave = () => {
  return (
    <svg
      className="wave"
      viewBox="0 0 1183 237"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        initial={{ pathLength: 0, pathOffset: 1 }}
        animate={{
          pathLength: 1,
          pathOffset: 0,
          transition: {
            duration: 4,
          },
        }}
        d="M2.5 2.50134C13 13.0013 206 226.503 482.5 234.003C573.333 235.836 660.479 189.308 728.5 78C811 -57 1113 63.0001 1182 78"
        stroke="#E872E3"
        stroke-opacity="0.2"
        stroke-width="8"
      />
    </svg>
  );
};

export default Wave;
