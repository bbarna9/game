import React, { useState } from "react";
import "./game.scss";
import Navbar from "../../components/Navbar/Navbar";
import GameField from "../../components/GameField/GameField";

const GameNewBackup = () => {
  // Initializing the game board with 30 cells filled with spaces (empty cells)
  // Will be turned into a dynamic array depending on chosen grid size
  // const GAME_SIZE = 30;
  const [startingInputs, setStartingInputs] = useState({
    row: 0,
    col: 0,
    fieldSize: 0,
    x: "",
    y: "",
  });

  const handleStart = (e) => {
    e.preventDefault();
    const gameSize = e.target.colNum.value * e.target.rowNum.value;
    setStartingInputs({
      row: e.target.rowNum.value,
      col: e.target.colNum.value,
      x: e.target.x.value,
      y: e.target.y.value,
      fieldSize: gameSize,
    });
    console.log(startingInputs);
  };

  // Displaying the game interface
  // This part is pretty straightforward, I have a navbar on the top, and below I have the game board itself
  return (
    <div className="mainArea">
      <Navbar />
      {/* ----------------- GAME FIELD ------------------- */}
      {startingInputs.fieldSize > 0 ? (
        <GameField {...startingInputs} />
      ) : (
        <div className="startingInputs">
          <form onSubmit={(e) => handleStart(e)}>
            <h2>Kik fognak játszani?</h2>
            <div style={{ display: "flex", gap: "20px" }}>
              <input
                type="text"
                name="x"
                placeholder="X-el játszó neve"
                required
              />
              <input
                type="text"
                name="y"
                placeholder="Y-al játszó neve"
                required
              />
            </div>
            <h2>Mekkora mezőt szeretnétek?</h2>
            <div style={{ display: "flex", gap: "20px" }}>
              <input
                type="number"
                name="colNum"
                placeholder="Oszlopok száma"
                required
              />
              <input
                type="number"
                name="rowNum"
                placeholder="Sorok száma"
                required
              />
            </div>
            <button type="submit" style={{ marginTop: "20px" }}>
              Játék kezdése
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default GameNewBackup;
