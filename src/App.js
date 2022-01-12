import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I'm just a reverse proxy
        </p>
        <a
          className="App-link"
          href="/reverse-proxy-basepath"
        >
          Go to NextJs App
        </a>
      </header>
    </div>
  );
}

export default App;
