
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Description from "./pages/Description";
import Home from './pages/Home';
import Appbar from "./components/Appbar";

function App() {
  return (
    <div >
    <Appbar />
     <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/desc" element={<Description />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
