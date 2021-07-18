import React from 'react';
import ReactDOM from 'react-dom';
import Exercise from './exercise.js';
import App from './App.js';
import './App.css';
import YouTubePlayer from "react-player/lib/players/YouTube";



const abs = <Exercise type="ab" />;
const legs = <Exercise type="leg" />;
const arm = <Exercise type="arm" />;
const back = <Exercise type="back" />;
const cardio = <Exercise type="cardio" />;

const ab1 = <App url ="https://www.youtube.com/watch?v=AnYl6Nk9GOA" />;
const ab2 = <App url ="https://www.youtube.com/watch?v=EfJ4aB_enVE" />;
const ab3 = <App url ="https://www.youtube.com/watch?v=aE54OIQdWFg" />;
const leg1 = <App url ="https://www.youtube.com/watch?v=NOKN3oeeCVg" />;
const leg2 = <App url ="https://www.youtube.com/watch?v=_sl7q03-0Mw" />;
const arm1 = <App url ="https://www.youtube.com/watch?v=8qDDtm6BOfw" />;
const arm2 = <App url ="https://www.youtube.com/watch?v=uveZX-71OUw" />;
const back1 = <App url ="https://www.youtube.com/watch?v=ECxsw3Dhr84" />;
const back2 = <App url ="https://www.youtube.com/watch?v=B5HBnDig8hY" />;
const cardio1 = <App url ="https://www.youtube.com/watch?v=gFeEUq2624Q" />;
const cardio2 = <App url ="https://www.youtube.com/watch?v=HE0WhQlkuN0" />;

// render tab headers
ReactDOM.render(abs, document.getElementById('abs'));
ReactDOM.render(legs, document.getElementById('legs'));
ReactDOM.render(arm, document.getElementById('arm'));
ReactDOM.render(back, document.getElementById('back'));
ReactDOM.render(cardio, document.getElementById('cardio'));

// render videos
ReactDOM.render(ab1, document.getElementById('ab1'));
ReactDOM.render(ab2, document.getElementById('ab2'));
ReactDOM.render(ab3, document.getElementById('ab3'));
ReactDOM.render(leg1, document.getElementById('leg1'));
ReactDOM.render(leg2, document.getElementById('leg2'));
ReactDOM.render(arm1, document.getElementById('arm1'));
ReactDOM.render(arm2, document.getElementById('arm2'));
ReactDOM.render(back1, document.getElementById('back1'));
ReactDOM.render(back2, document.getElementById('back2'));
ReactDOM.render(cardio1, document.getElementById('cardio1'));
ReactDOM.render(cardio2, document.getElementById('cardio2'));


