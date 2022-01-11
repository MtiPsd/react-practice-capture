import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
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
        </li>
        <li>
          <Link to={"/work"}>فیلم ها</Link>
        </li>
        <li>
          <Link to={"/contact"}>تماس با ما</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
