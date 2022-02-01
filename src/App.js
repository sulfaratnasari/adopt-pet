import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BerandaAdoptPets from "../src/pages/Beranda/Beranda";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import PetDescription from "./pages/PetDesciption/PetDescription";
import AboutUs from "./pages/AboutUs/AboutUs";
import SearchPet from "./pages/SearchPet/SearchPet";
import RehomePet from "./pages/RehomePet/RehomePet";
import LostAndFound from "./pages/LostandFound/LostAndFound";
import FormLostPets from "./pages/LostandFound/FormPetLost";
import FormFoundPets from "./pages/LostandFound/FormPetFound";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" exact element={<BerandaAdoptPets />} />
          <Route path="/description" element={<PetDescription/>}/>
          <Route path="/aboutus" element={<AboutUs />}/>
          <Route path="/searchpet" element={<SearchPet />}/>
          <Route path="/rehomepet" element={<RehomePet />}/>
          <Route path="/lostandfound" element={<LostAndFound />}/>
          <Route path="/formlost" element={<FormLostPets />}/>
          <Route path="/formfound" element={<FormFoundPets />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
