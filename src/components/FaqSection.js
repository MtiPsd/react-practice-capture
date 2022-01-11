import React from "react";
//Toggle
import Toggle from "../components/Toggle";
//Animate
import { AnimateSharedLayout, motion } from "framer-motion";
import { scrollReveal } from "../animation";
import { useScroll } from "./UseScroll";

const FaqSection = () => {
  //useScroll
  const [element, controls] = useScroll();

  return (
    <motion.div
      className="faq"
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>سوالی دارید؟</h2>

      <AnimateSharedLayout>
        {/* single question */}
        <Toggle title={"چگونه شروع کنم؟"}>
          <div className="answer">
            <p>لورم ایپسوم متن ساختگی با</p>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت</p>
          </div>
        </Toggle>
        {/* end */}

        {/* single question */}
        <Toggle title={"برنامه روزانه"}>
          <div className="answer">
            <p>لورم ایپسوم متن ساختگی با</p>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت</p>
          </div>
        </Toggle>
        {/* end */}

        {/* single question */}
        <Toggle title={"درآمدهای متفاوت"}>
          <div className="answer">
            <p>لورم ایپسوم متن ساختگی با</p>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت</p>
          </div>
        </Toggle>
        {/*  end */}

        {/* single question */}
        <Toggle title={"چه محصولاتی را پیشنهاد می دهید؟"}>
          <div className="answer">
            <p>لورم ایپسوم متن ساختگی با</p>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت</p>
          </div>
        </Toggle>
        {/*  end */}
      </AnimateSharedLayout>
    </motion.div>
  );
};

export default FaqSection;
