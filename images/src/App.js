import ImageUpload from "./components/ImageUpload";
import Mail from "./components/mail";
import Index from "./components";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
function App() {
  return (
    <>
    {/* <ImageUpload />
    <Mail /> */}
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/image" element={<ImageUpload />}/>
        <Route path="/mail" element={<Mail />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
