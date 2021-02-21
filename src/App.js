import logo from './logo.svg';
import './App.css';
import { config } from './constants.js';
import { elements } from './components/elements.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       {config.url.API_URL}
      </header>
      <elements></elements>
    </div>
  );
}

export default App;
