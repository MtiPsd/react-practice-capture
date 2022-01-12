import React from "react";
// Import Animation
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";

const ContactUs = () => {
  return (
    <motion.div
      className="contact"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className="contact-title">
        <div className="hide">
          <motion.h2 variants={titleAnim}>با ما در تماس باشید</motion.h2>
        </div>
      </div>

      <div>
        {/* Single Social */}
        <div className="hide">
          <motion.div className="social" variants={titleAnim}>
            <div className="hide"></div>
            <div className="circle"></div>
            <h3>ارسال تیکت</h3>
          </motion.div>
        </div>
        {/* End */}

        {/* Single Social */}
        <div className="hide">
          <motion.div className="social" variants={titleAnim}>
            <div className="hide"></div>
            <div className="circle"></div>
            <h3>ارسال ایمیل</h3>
          </motion.div>
        </div>
        {/* End */}

        {/* Single Social */}
        <div className="hide">
          <motion.div className="social" variants={titleAnim}>
            <div className="hide"></div>
            <div className="circle"></div>
            <h3>ارسال توییت</h3>
          </motion.div>
        </div>
        {/* End */}
      </div>
    </motion.div>
  );
};

export default ContactUs;
