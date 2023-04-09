import React from "react";
import {Link } from "react-router-dom";
var json = require('./data.json');

 function Info() {
    const url = window.location.href;
    const pokeID = url.slice(-3)
    const realPokeID = parseInt(pokeID) - 1
    console.log(realPokeID)
    if (realPokeID != -1) {
     return (
       <div class="poke-info">
           <img class="poke-display" src={`https://github.com/fanzeyi/pokemon.json/raw/master/images/${pokeID}.png`} />
           <div class="stats-div">
            <p id="poke-name">{json[realPokeID].name.english}</p>
            <p id="poke-type">{json[realPokeID].type[0]} {json[realPokeID].type[1]}</p>
            <p>HP: {json[realPokeID].base.HP}</p>
            <p>Attack: {json[realPokeID].base.Attack}</p>
            <p>Defense: {json[realPokeID].base.Defense}</p>
            <p>Sp. Attack: {json[realPokeID].base["Sp. Attack"]}</p>
            <p>Sp. Defense: {json[realPokeID].base["Sp. Defense"]}</p>
            <p>Speed: {json[realPokeID].base.Speed}</p>
           </div>
       </div>
     );
    }

 }

 export default Info;