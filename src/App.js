import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Бецко Д.С.";

  console.log('This is App ');
  return (
    <div className="App">
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
         {name}
      </header>
    </div>
  );
}

export default App;
