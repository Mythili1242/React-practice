import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import CartPage from './components/CartPage';
import HomePage from './components/HomePage';


function App() {
 
  return (
 <>
 <nav>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/cart'>Cart</a>
            </li>
          </ul>
        </nav>

  <Router>
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/cart' element={<CartPage />} />
    </Routes>
  </Router>


 </>
  );
}

export default App;
