import React from "react";
import {Link } from "react-router-dom";
var json = require('./data.json');

function clearPoke(){
    const url = window.location.href;
    window.location.href = url.slice(0, -4);    
} 

 function Info() {
    const url = window.location.href;
    const biggerSlice = url.slice(-5)

    const pokeID = url.slice(-3)
    const realPokeID = parseInt(pokeID) - 1
    console.log(realPokeID)
    if (realPokeID != -1 && biggerSlice.includes("L")) {
     return (
       <div class="poke-info">
           <img class="poke-display" src={`https://github.com/fanzeyi/pokemon.json/raw/master/images/${pokeID}.png`} />
           <button id="clear-button" onClick={clearPoke}>Clear Pokemon</button>
           <div class="stats-div">
            <span id="poke-name">{json[realPokeID].name.english}</span>
            <p id="poke-type">{json[realPokeID].type[0]} {json[realPokeID].type[1]}</p>
            <p>HP: {json[realPokeID].base.HP}</p>
            <p>Attack: {json[realPokeID].base.Attack}</p>
            <p>Defense: {json[realPokeID].base.Defense}</p>
            <p>Sp. Attack: {json[realPokeID].base["Sp. Attack"]}</p>
            <p>Sp. Defense: {json[realPokeID].base["Sp. Defense"]}</p>
            <span>Speed: {json[realPokeID].base.Speed}</span>
           </div>
       </div>
     );
    }

 }

 export default Info;