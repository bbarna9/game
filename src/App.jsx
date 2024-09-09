import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.scss';

function App() {
  let arr = new Array(30);
  for (let i = 0; i < 30; i++) {
    arr[i] = arr[i] = '';
  }

  return (
    <div className="mainArea">
      {/* ----------------- NAVBAR ------------------- */}
      <div className="navbar">
        <button className="startButton">JÁTÉK INDÍTÁSA</button>
        <h1 className="title">AMŐBA</h1>
        <button className="topListButton">TOPLISTA</button>
      </div>
      {/* ----------------- GAME FIELD ------------------- */}
      <div className="gridField">
        {arr.map((box, i) => (
          <div
            className="gridCell"
            key={i}
            onClick={() => {
              console.log(box);
              box = 'X';
              console.log(box);
            }}
          >
            {box === 'O' ? 'O' : ' '}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
