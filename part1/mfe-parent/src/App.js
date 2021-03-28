import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <app-accounts></app-accounts>
       <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
       </header>
       <app-payments></app-payments>
    </div>
  );
}

export default App;
