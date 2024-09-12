import React, { useState } from "react";
import "./game.scss";
import Navbar from "../../components/Navbar/Navbar";

const Game = () => {
  // Initializing the game board with 30 cells filled with spaces (empty cells)
  // Will be turned into a dynamic array depending on chosen grid size
  const GAME_SIZE = 30;

  let arr = new Array(GAME_SIZE).fill(" ");
  let winArray = [];

  const [marks, setMarks] = useState(arr);
  const [counter, setCounter] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState("");

  // Handling cell click eveng

  const cellClicked = (i) => {
    // Setting the counter, so the game can alternate between "X" and "O"
    setCounter((prevCounter) => prevCounter + 1);

    // Creating a new array with the previous cell content
    const newArr = [...marks];

    // Deciding wether to put "X" or "O" in the cell
    counter % 2 === 0 ? (newArr[i] = "X") : (newArr[i] = "O");

    // Updating the state with the new array for component re-rendering
    setMarks(newArr);

    // Checking if the game is over after the last move
    checkWinCondition(newArr);
  };

  // Check if the game is over (anyone has 5 cells next to each other in a row or a column)
  // It's repetitive for now, once everything is completed I will try to refactor it.

  const checkWinCondition = (marks) => {
    // Firstly I'm going through all the cells and check if they contain an "X" or an "O"
    for (let i = 0; i < marks.length; i++) {
      // If branch for 'X' mark
      if (marks[i] === "X") {
        // I'm going through the cells first horizontally, then vertically
        // Currently the overflowing lines win as well, will fix it later
        if (
          (marks[i + 1] === "X" &&
            marks[i + 2] === "X" &&
            marks[i + 3] === "X" &&
            marks[i + 4] === "X") ||
          (marks[i + 6] === "X" &&
            marks[i + 12] === "X" &&
            marks[i + 18] === "X" &&
            marks[i + 24] === "X") ||
          (marks[i + 7] === "X" &&
            marks[i + 14] === "X" &&
            marks[i + 21] === "X" &&
            marks[i + 28] === "X") ||
          (marks[i + 5] === "X" &&
            marks[i + 10] === "X" &&
            marks[i + 15] === "X" &&
            marks[i + 20] === "X")
        ) {
          // Trying to handle the red background styling of the winning cells, but it doesn't work properly,
          // will fix later
          winArray.push(i, i + 1, i + 2, i + 3, i + 4);
          console.log(winArray);
          setGameOver(true);
          setWinner("X nyert!");
        }

        // If branch for 'O' mark
      } else if (marks[i] === "O") {
        // I'm going through the cells first horizontally, then vertically
        // Currently the overflowing lines win as well, will fix it later
        if (
          (marks[i + 1] === "O" &&
            marks[i + 2] === "O" &&
            marks[i + 3] === "O" &&
            marks[i + 4] === "O") ||
          (marks[i + 6] === "O" &&
            marks[i + 12] === "O" &&
            marks[i + 18] === "O" &&
            marks[i + 24] === "O") ||
          (marks[i + 7] === "O" &&
            marks[i + 14] === "O" &&
            marks[i + 21] === "O" &&
            marks[i + 28] === "O") ||
          (marks[i + 5] === "O" &&
            marks[i + 10] === "O" &&
            marks[i + 15] === "O" &&
            marks[i + 20] === "O")
        ) {
          // Trying to handle the red background styling of the winning cells, but it doesn't work properly,
          // will fix later
          winArray.push(i, i + 1, i + 2, i + 3, i + 4);
          console.log(winArray);
          setWinner("O nyert!");
          setGameOver(true);
        }
      } else if (counter === GAME_SIZE - 1) {
        setWinner("Döntetlen!");
        setGameOver(true);
      }
    }
  };

  // Displaying the game interface
  // This part is pretty straightforward, I have a navbar on the top, and below I have the game board itself
  return (
    <div className="mainArea">
      {/* ----------------- GAME FIELD ------------------- */}
      <h1 className="gameOverHeader">{winner}</h1>
      <div className="gridField">
        {marks.map((box, i) => (
          // If the cell is not empty, it will be disabled, otherwise it will be fillable on click.
          <button
            className={`gridCell ${box === "X" ? "X" : "O"} ${
              winArray.includes(i) && "winner"
            }`}
            key={i}
            style={{}}
            onClick={() => cellClicked(i)}
            disabled={box === "X" || box === "O" || gameOver}
          >
            {box}
          </button>
        ))}
      </div>
      {gameOver && (
        <button
          onClick={() => {
            setMarks(arr);
            setGameOver(false);
            setWinner("");
          }}
          className="newGameButton"
        >
          ÚJ JÁTÉK
        </button>
      )}
    </div>
  );
};

export default Game;
