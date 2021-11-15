import './App.css';
import React, {useState} from 'react';



function Login(props) {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

let errorMessage;
if(props.errorState !== ''){
  console.log(props.errorState)
  errorMessage = <div className="errorMessage" >{props.errorState}</div>
}else{
  errorMessage = <div></div>
}

  return (
    <div className="Login">
        {errorMessage}
        <input type="text" placeholder="E-Mail" value={email} onChange={(e) => {setEmail(e.target.value)}}  />
        <input type="text" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}}  />
        <button onClick={ () => { props.login(email, password) } }>Log in</button>
    </div>
  );
}

export default Login;
