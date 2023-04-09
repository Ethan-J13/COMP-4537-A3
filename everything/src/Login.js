import React from "react";


function clearPoke(){
    const url = window.location.href;
    window.location.href = url.slice(0, -3);    
} 

 function Login() {
    const url = window.location.href;
    const pokeID = url.slice(-5)
    const realPokeID = parseInt(pokeID) - 1
    console.log(pokeID)
    if (!pokeID.includes("L")) {
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

 export default Login;