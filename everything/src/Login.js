import React from "react";


function loginFunc(){
    const url = window.location.href;
    window.location.href = url + "L";    
} 

 function Login() {
    const url = window.location.href;
    const pokeID = url.slice(-5)
    console.log(pokeID)
    if (!pokeID.includes("L")) {
     return (
        <div id="login-form">
            <span>Login</span>
            <br />
            <input type="text" placeholder="username" />
            <br />
            <input type="password" placeholder="password" />
            <br />
            <button onClick={loginFunc} type="submit">
              Login
            </button>
      </div>
     );
    }

 }

 export default Login;