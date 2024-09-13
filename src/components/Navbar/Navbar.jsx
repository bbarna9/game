import React from "react";
import "./navbar.scss";

const Navbar = ({ x, y }) => {
  return (
    <div className="navbar">
      <div className="container">
        <h1 className="title">{x}</h1>
        <button className="startButton">
          <a href="/">JÁTÉK INDÍTÁSA</a>
        </button>
        <h1 className="title">AMŐBA</h1>
        <button className="topListButton">
          <a href="/toplist">TOPLISTA</a>
        </button>
        <h1 className="title">{y}</h1>
      </div>
    </div>
  );
};

export default Navbar;
