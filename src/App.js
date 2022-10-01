import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Navigation from './Shared/Navigation/Navigation';

function App() {
  return (
    <div className="App">
       <Navigation></Navigation>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
