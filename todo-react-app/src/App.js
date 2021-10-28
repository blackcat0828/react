import logo from './logo.svg';
import './App.css';
import TestRouter from './components/TestRouter';
import {Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <div>
          <Link to="/testA">페이지 A</Link><br />
          <Link to="/testB">페이지 B</Link><br />
          <Link to="/testC">페이지 C</Link><br />

        </div>

        <TestRouter/>

      </header>
    </div>
  );
}

export default App;
