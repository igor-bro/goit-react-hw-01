import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(1);

  return (
    <>
      <div>
        <a href="https://vitejs.dev">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          Твій варіант - {count} - година(и)
        </button>
        <br />
        <p>Зроби ставку - за скільки годин справишся з наступним ДЗ</p>
      </div>
      <p className="read-the-docs">
        Тисни Vite та React лого, щоб дізнатись більше...
      </p>
    </>
  );
}

export default App;
