import React from 'react';
import logo from './logo.svg';
import './App.css';
import DumbThings from "./DumbThings.js"

function App() {

  return (
    <div className="App">
      <div className="top">
        <h1 id="title">Dumb Game Maker Made this Dumb Game!</h1>
        <p>The only game where you do dumb things to make a number big!<br/>
        Really, don't play this game! It's dumb and made by the dumb game maker<br/>
        What's that? You want to play? NO! DON'T PLAY THE DUMB GAME!<br/>
        <i>oh, and the buttons are below.</i></p>
      </div>
    
      <DumbThings />
      <footer>
        Note: this game is a joke and will NOT download or install anything. <br />
        Suggestions, Issues, or improvements? Check out our <a href="https://github.com/DumbGameMaker/MadeThisDumbGame">Github!</a><br />
        DISCLAIMER: <br />
        There will be times when the game asks you for personal info, do NOT under ANY CIRCUIMSTANCES give it your personal info <br />
        Even though the game doesn't process it, it's good practice NOT to give random games your info. I am not responsible if <br />
        your accounts or computer gets hacked because you did. Although... the point of the game IS to do dumb stuff so... 
        <br />
        Made with love by DumbGameMaker<br />
        <br />
        Licenced under the CC BY-SA-NC licence. <br />
        TL/DR you can do whatever you want with this software, for free, <br />
        but if you share this software or any modifications of it you MUST share <br />
        under the same licence AND make a total of exactly $0.00 off of it.<br />
        <br />
      </footer>
    </div>
  );
}

export default App;
