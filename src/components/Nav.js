import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <nav>
      {/* logo */}
      <h1>
        <Link to={"/"}>Capture</Link>
      </h1>
      {/* end */}
      <ul>
        <li>
          <Link to={"/"}>درباره ما</Link>
          <motion.div
            className="list-line"
            transition={{
              duration: 0.75,
            }}
            initial={{
              width: "0%",
            }}
            animate={{
              width: pathname === "/" ? "120%" : "0%",
            }}
          ></motion.div>
        </li>
        <li>
          <Link to={"/work"}>فیلم ها</Link>
          <motion.div
            className="list-line"
            transition={{
              duration: 0.75,
            }}
            initial={{
              width: "0%",
            }}
            animate={{
              width: pathname === "/work" ? "120%" : "0%",
            }}
          ></motion.div>
        </li>
        <li>
          <Link to={"/contact"}>تماس با ما</Link>
          <motion.div
            className="list-line"
            transition={{
              duration: 0.75,
            }}
            initial={{
              width: "0%",
            }}
            animate={{
              width: pathname === "/contact" ? "120%" : "0%",
            }}
          ></motion.div>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
