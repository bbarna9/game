import React from "react";
import "./navbar.scss";
import bear from "/img/bear.svg";
import wolf from "/img/wolf.svg";
import panda from "/img/panda.svg";

const Navbar = ({ x, y, xChar, yChar }) => {
  return (
    <div className="navbar">
      <div className="container">
        <h1 className="title">
          <img
            src={xChar === "bear" ? bear : xChar === "wolf" ? wolf : panda}
            alt="charImg"
            style={{
              width: "50px",
              height: "50px",
              display: `${xChar === "" ? "none" : "flex"}`,
            }}
          />
        </h1>
        <button className="startButton">
          <a href="/">JÁTÉK INDÍTÁSA</a>
        </button>
        <h1 className="title">AMŐBA</h1>
        <button className="topListButton">
          <a href="/toplist">TOPLISTA</a>
        </button>
        <h1 className="title">
          <img
            src={yChar === "bear" ? bear : yChar === "wolf" ? wolf : panda}
            alt="charImg"
            style={{
              width: "50px",
              height: "50px",
              display: `${xChar === "" ? "none" : "flex"}`,
            }}
          />
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
