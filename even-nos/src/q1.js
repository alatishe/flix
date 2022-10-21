import logo from './logo.svg';
import './App.css';

function App() {

  const nums = [2, 3, 4, null, 6, 'a', 3];

  const sumEvens = (num) => {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
      if (num[i] % 2 === 0) {
        sum = sum + num[i];
      }
    }
    return sum;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The answer = {sumEvens(nums)}
        </p>
        
      </header>
    </div>
  );
}

export default App;
