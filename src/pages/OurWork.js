import React from "react";
import { Link } from "react-router-dom";
import attack from "../img/attackOnTitan.jpg";
import vikings from "../img/vikings.jpg";
import onePiece from "../img/onePiece.jpg";
// Import Animation
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "../animation";
import { useScroll } from "../components/UseScroll";
//ScrollTop
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  //..................... Use Scroll..............

  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

  //........................App.........................

  return (
    <motion.div
      className="work"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainer}>
        <motion.div className="frame1" variants={slider}></motion.div>
        <motion.div className="frame2" variants={slider}></motion.div>
        <motion.div className="frame3" variants={slider}></motion.div>
        <motion.div className="frame4" variants={slider}></motion.div>
      </motion.div>
      {/* Single Movie */}
      <motion.div className="movie" variants={fade}>
        <motion.h2 variants={fade}>Attack On Titan</motion.h2>
        <motion.div className="line" variants={lineAnim}></motion.div>
        <Link to={"/work/attack-on-titan"}>
          <div className="img-hide">
            <motion.img
              src={attack}
              alt="attack on titan"
              variants={photoAnim}
            />
          </div>
        </Link>
      </motion.div>
      {/* End*/}

      {/* Single Movie */}
      <motion.div
        className="movie"
        variants={fade}
        ref={element}
        animate={controls}
        initial="hidden"
      >
        <motion.h2 variants={fade}>Vikings</motion.h2>
        <motion.div className="line" variants={lineAnim}></motion.div>
        <Link to={"/work/vikings"}>
          <motion.img src={vikings} alt="vikings" variants={photoAnim} />
        </Link>
      </motion.div>
      {/* End*/}

      {/* Single Movie */}
      <motion.div
        className="movie"
        variants={fade}
        ref={element2}
        animate={controls2}
        initial="hidden"
      >
        <motion.h2 variants={fade}>One Piece</motion.h2>
        <motion.div className="line" variants={lineAnim}></motion.div>
        <Link to={"/work/one-piece"}>
          <motion.img src={onePiece} alt="One piece" variants={photoAnim} />
        </Link>
      </motion.div>
      {/* End*/}
      <ScrollTop />
    </motion.div>
  );
};

export default OurWork;
