import React from 'react';
import GuessWords from './GuessedWords/GuessedWords';
import Congrats from './Congrats/Congrats';
import './App.css'
function App() {
  return (
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessWords guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]} />
    </div>
  );
}

export default App;
