import React from "react";
import Login from "./components/login";
import Home from "./components/home";
import Logout from "./components/logout";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      
    </Routes>
  </Router>
  );
}

export default App;
