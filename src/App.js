import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Бецко Д.С.";

  return (
    <div className="App">
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Это тестовый проект</p>
         {name}
      </header>
    </div>
  );
}

export default App;