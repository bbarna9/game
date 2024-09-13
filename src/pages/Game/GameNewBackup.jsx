import React, { useState } from "react";
import "./game.scss";
import Navbar from "../../components/Navbar/Navbar";
import GameField from "../../components/GameField/GameField";
import bear from "/img/bear.svg";
import wolf from "/img/wolf.svg";
import panda from "/img/panda.svg";

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
    xChar: "",
    yChar: "",
  });

  const screenSize = window.innerWidth;
  const maxCols = screenSize > 620 ? 24 : 9;
  const maxRows = screenSize > 620 ? 9 : 17;

  const handleCharacterSelect = (e, char, animal) => {
    e.preventDefault();
    char === "x"
      ? setStartingInputs({ ...startingInputs, xChar: animal })
      : setStartingInputs({ ...startingInputs, yChar: animal });
    console.log(startingInputs.xChar, startingInputs.yChar);
  };

  const handleStart = (e) => {
    e.preventDefault();
    const gameSize =
      parseInt(e.target.colNum.value) * parseInt(e.target.rowNum.value);
    setStartingInputs({
      ...startingInputs,
      row: parseInt(e.target.rowNum.value),
      col: parseInt(e.target.colNum.value),
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
      <Navbar
        x={startingInputs.x}
        y={startingInputs.y}
        xChar={startingInputs.xChar}
        yChar={startingInputs.yChar}
      />
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
            <h2>Első játékos karaktere</h2>
            <div className="characterSelector">
              <button onClick={(e) => handleCharacterSelect(e, "x", "bear")}>
                <img
                  src={bear}
                  alt="bearImg"
                  style={{ width: "50px", height: "50px" }}
                />
              </button>
              <button onClick={(e) => handleCharacterSelect(e, "x", "wolf")}>
                <img
                  src={wolf}
                  alt="wolfImg"
                  style={{ width: "50px", height: "50px" }}
                />
              </button>
              <button onClick={(e) => handleCharacterSelect(e, "x", "panda")}>
                <img
                  src={panda}
                  alt="pandaImg"
                  style={{ width: "50px", height: "50px" }}
                />
              </button>
            </div>
            <h2>Második játékos karaktere</h2>
            <div className="characterSelector">
              <button
                onClick={(e) => handleCharacterSelect(e, "y", "bear")}
                disabled={startingInputs.xChar === "bear"}
              >
                <img
                  src={bear}
                  alt="bearImg"
                  style={{ width: "50px", height: "50px" }}
                  className={startingInputs.xChar === "bear" && "notAvailable"}
                />
              </button>
              <button
                onClick={(e) => handleCharacterSelect(e, "y", "wolf")}
                disabled={startingInputs.xChar === "wolf"}
              >
                <img
                  src={wolf}
                  alt="wolfImg"
                  style={{ width: "50px", height: "50px" }}
                  className={startingInputs.xChar === "wolf" && "notAvailable"}
                />
              </button>
              <button
                onClick={(e) => handleCharacterSelect(e, "y", "panda")}
                disabled={startingInputs.xChar === "panda"}
              >
                <img
                  src={panda}
                  alt="pandaImg"
                  style={{ width: "50px", height: "50px" }}
                  className={startingInputs.xChar === "panda" && "notAvailable"}
                />
              </button>
            </div>
            <h2>Mekkora mezőt szeretnétek?</h2>
            <div
              style={{
                display: "flex",
                gap: "20px",
                width: "100%",
              }}
            >
              <input
                type="number"
                name="colNum"
                placeholder="Oszlopok száma"
                required
                max={maxCols}
                min={5}
                style={{ flex: "1" }}
              />
              <input
                type="number"
                name="rowNum"
                placeholder="Sorok száma"
                required
                max={maxRows}
                min={5}
                style={{ flex: "1" }}
              />
            </div>
            <button type="submit" className="startButton">
              Játék kezdése
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default GameNewBackup;
