import './App.css';
import { FomrComponent } from './components/fomr';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FomrComponent name='marco'/>
        <FomrComponent name='Mau' />
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

export default App;
