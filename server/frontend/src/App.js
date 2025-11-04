import LoginPanel from "./components/Login/Login"
import { Routes, Route } from "react-router-dom";
import Register from './components/Register/Register'; // Add this import
import './App.css';
import Dealers from './components/Dealers/Dealers';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Register />} />

    </Routes>
  );
}
export default App;
