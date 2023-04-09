import React, { useState } from "react";
import axios from 'axios'


function loginFunc(){
    const url = window.location.href;
    window.location.href = url + "L";    
} 

 function Login() {



    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});
    const [accessToken, setAccessToken] = useState('');
    const [refreshToken, setRefreshToken] = useState('');
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("http://localhost:5000/login", { username, password });
        setUser(res.data);
        setAccessToken(res.headers['auth-token-access']);
        setRefreshToken(res.headers['auth-token-refresh']);
      } catch (err) {
        console.log(err);
      }
    }



    const url = window.location.href;
    const pokeID = url.slice(-5)
    console.log(pokeID)
    if (!pokeID.includes("L")) {
     return (
        <div id="login-form">
            <span>Login</span>
            <br />
            <input type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
            <br />
            <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
            <br />
            <button onClick={loginFunc} type="submit">
              Login
            </button>
      </div>
     );
    }

 }

 export default Login;