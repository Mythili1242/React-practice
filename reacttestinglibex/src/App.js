import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


//see app.test.js
//to test this we have to mention npm test in terminal, as mentioned in package.json
//in app.js ,we are testing whether we have text named learn react in app.if it passes it shows success
//test takes two arguments,one is description and another one is function in which we render the component we want to test
export default App;
