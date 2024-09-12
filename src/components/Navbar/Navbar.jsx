import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <button className="startButton">
        <a href="/">JÁTÉK INDÍTÁSA</a>
      </button>
      <h1 className="title">AMŐBA</h1>
      <button className="topListButton">
        <a href="/toplist">TOPLISTA</a>
      </button>
    </div>
  );
};

export default Navbar;
