import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        my first react project, my name is Neil Patiño.
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=2nxl9pB06Ok"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
