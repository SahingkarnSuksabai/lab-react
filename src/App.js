import React from 'react'; 
import './App.css';
import WordCard from './WorldCard';


const word = "Hellonaja";
function App() {
  return (
    <div>
      <WordCard value={word}/>
    </div>
  );
}

export default App;
