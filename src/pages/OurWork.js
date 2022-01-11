import React from "react";
import { Link } from "react-router-dom";
import attack from "../img/attackOnTitan.jpg";
import vikings from "../img/vikings.jpg";
import onePiece from "../img/onePiece.jpg";
const OurWork = () => {
  return (
    <div className="work">
      {/* Single Movie */}
      <div className="movie">
        <h2>Attack On Titan</h2>
        <div className="line"></div>
        <div>
          <img src={attack} alt="attack on titan" />
        </div>
      </div>
      {/* End*/}

      {/* Single Movie */}
      <div className="movie">
        <h2>Vikings</h2>
        <div className="line"></div>
        <div>
          <img src={vikings} alt="vikings" />
        </div>
      </div>
      {/* End*/}

      {/* Single Movie */}
      <div className="movie">
        <h2>One Piece</h2>
        <div className="line"></div>
        <div>
          <img src={onePiece} alt="One piece" />
        </div>
      </div>
      {/* End*/}
    </div>
  );
};

export default OurWork;
