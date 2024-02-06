import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import About from "./components/About";
import Protected from "./components/Protected";
function App() {
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const logIn = () => {
    setisLoggedIn(true);
  };
  const logOut = () => {
    setisLoggedIn(false);
  };
  return (
    <Router>
      <Navbar />
      {isLoggedIn ? (
        <button onClick={logOut}>Logout</button>
      ) : (
        <button onClick={logIn}>Login</button>
      )}
      <Routes>
      <Route path='/' element={<Home />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route
          path="/profile"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Profile />
            </Protected>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
export default App;
