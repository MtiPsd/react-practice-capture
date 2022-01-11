import React from "react";
import home1 from "../img/home1.jpg";

const AboutSection = () => {
  return (
    <div className="about">
      <div className="discription">
        {/* title */}
        <div className="title">
          <div className="hide">
            <h2>ما در تلاشیم تا</h2>
          </div>
          <div className="hide">
            <h2>
              <span>رویاهایتان</span> را
            </h2>
          </div>
          <div className="hide">
            <h2> حقیقت ببخشیم</h2>
          </div>
        </div>
        {/* title end */}
        <p>
          با ما در تماس باشید تا با به روز ترین و حرفه ای ترین ایده های طراحی
          روز دنیا آشنا شوید
        </p>
        <button>تماس با ما</button>
      </div>
      {/* About image */}
      <div className="image">
        <img src={home1} alt="landing" />
      </div>
    </div>
  );
};

export default AboutSection;
