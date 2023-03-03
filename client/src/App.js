import "./App.css";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        
          <Route exact path = "/register" element = {<Register/>}/>
          <Route exact path = "/login" element = {<Login/>}/>
       
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
