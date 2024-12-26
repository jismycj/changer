
import React, { useState } from 'react';
import './App.css';

function App() {
  // Array of colors
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#9B59B6', '#E74C3C', '#1ABC9C'];

  // State to keep track of the current color index
  const [currentColor, setCurrentColor] = useState(colors[0]);

  // Function to change the background color
  const changeColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setCurrentColor(randomColor);
  };

  return (
    <div className="App" style={{ backgroundColor: currentColor }}>
      <header className="App-header">
        <h1>Background Color Changer</h1>
        <button onClick={changeColor}>Change Color</button>
      </header>
    </div>
  );
}

export default App;
