import { useState } from "react";
import "./App.scss";
import Game from "./pages/Game/Game.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Toplist from "./pages/Toplist/Toplist.jsx";

import "./fonts/MYRIADPROBOLD.otf";
import "./fonts/PlasticSansRegular.otf";
import GameNewBackup from "./pages/Game/GameNewBackup.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route exact path="/" element={<Game />} /> */}
        <Route exact path="/" element={<GameNewBackup />} />
        <Route path="/toplist" element={<Toplist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
