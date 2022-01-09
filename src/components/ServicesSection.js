import React from "react";
import money from "../img/money.svg";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import teamWork from "../img/teamwork.svg";
import home2 from "../img/home2.jpg";

const ServicesSection = () => {
  return (
    <div className="services">
      {/* discription */}
      <div className="description">
        <h2>
          <span>کیفیت</span>بالای خدمات
        </h2>
        <div className="cards">
          {/* single card */}
          <div className="card">
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>کارآمد</h3>
            </div>
            <p>لورم ایپسوم متن ساختگی با تولید</p>
          </div>
          {/* single card end */}
          {/* single card */}
          <div className="card">
            <div className="icon">
              <img src={money} alt="money" />
              <h3>مقرون به صرفه</h3>
            </div>
            <p>لورم ایپسوم متن ساختگی با تولید</p>
          </div>
          {/* single card end */}
          {/* single card */}
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>دیافراگم</h3>
            </div>
            <p>لورم ایپسوم متن ساختگی با تولید</p>
          </div>
          {/* single card end */}
          {/* single card */}
          <div className="card">
            <div className="icon">
              <img src={teamWork} alt="team work" />
              <h3>کار تیمی</h3>
            </div>
            <p>لورم ایپسوم متن ساختگی با تولید</p>
          </div>
          {/* single card end */}
        </div>
      </div>
      {/* image */}
      <div className="image">
        <img src={home2} alt="camera picture" />
      </div>
    </div>
  );
};

export default ServicesSection;
