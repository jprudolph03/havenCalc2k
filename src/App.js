import React from 'react';
import HavenInput from './HavenInput';
import './normalize.css';
import './skeleton.css';
import './App.css';

function App() {
  return (
    <div className="App">
     <div class='intro'>
       <h1>Haven Calc 2k</h1>
       <ul>
         <li>.125 (1/8th inch) is lost per cut from verticle blade</li>
         <li>2 - 3 inches Left over. Less may destroy the last piece!</li>
         <li>Arrow UP or DOWN and watch the magic happen!<li>not on mobile</li></li>
       </ul>
     </div>
       <HavenInput />
   </div>
  );
}

export default App;
