import { useState } from 'react';
import './App.css';

function App() {
  const [state,setState]=useState(false)
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src="Octocat.png" className="App-logo" alt="logo" /> */}
        {state&&<p>
          Close the site if you are gayyyy
        </p>}
        <button onClick={()=>setState(true)}>
          Click here
        </button>
        {/* <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p> */}
      </header>
    </div>
  );
}

export default App;
