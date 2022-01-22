import './App.css';
import BerandaAdoptPets from '../src/pages/Beranda/Beranda'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = '/login' element={<Login />}/>
		  <Route path = '/register' element={<Register />}/>
          <Route path = '/' exact element= {<BerandaAdoptPets/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
