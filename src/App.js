import logo from './logo.svg';
import './App.css';
import BerandaAdoptPets from '../src/pages/Beranda/Beranda'
import Login from './pages/Login/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = '/login' element={<Login />}/>
          <Route path = '/' exact element= {<BerandaAdoptPets/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
