import React from "react";
import home1 from "../img/home1.jpg";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  //.....................................App.........................................
  return (
    <div className="about">
      {/*............................. descrption.............................. */}

      <div className="discription">
        {/* title */}
        <motion.div className="title">
          <div className="hide">
            <motion.h2 variants={titleAnim}>ما در تلاشیم تا</motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnim}>
              <span>رویاهایتان</span> را
            </motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnim}> حقیقت ببخشیم</motion.h2>
          </div>
        </motion.div>
        {/* title end */}
        <motion.p variants={fade}>
          با ما در تماس باشید تا با به روز ترین و حرفه ای ترین ایده های طراحی
          روز دنیا آشنا شوید
        </motion.p>
        <motion.button variants={fade}>تماس با ما</motion.button>
      </div>

      {/*............................. end.............................. */}

      {/*.......................... About image............................. */}

      <div className="image">
        <motion.img src={home1} alt="landing" variants={photoAnim} />
      </div>

      {/*.......................... end............................. */}

      {/*.......................... Wave............................. */}

      <Wave />

      {/*.......................... end............................. */}
    </div>
  );
};

export default AboutSection;
