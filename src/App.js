import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BerandaAdoptPets from "../src/pages/Beranda/Beranda";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import PetDescription from "./pages/PetDesciption/PetDescription";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" exact element={<BerandaAdoptPets />} />
          <Route path="/description" element={<PetDescription />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
