import logo from './logo.svg';
import './App.css';
import Rules from './Components/Rules';
import Game from './Components/Game';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element = {<Rules/>}/>
        <Route path="/Game" element = {<Game/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
