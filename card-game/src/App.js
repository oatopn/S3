import React from 'react';
import WordCard from './WordCard';
import logo from './logo.svg';
import './App.css';
const word = "Hello";
function App() {
  return (
    <div className="App">
      <WordCard value="hello"/>
    </div>
  );
}
export default App;