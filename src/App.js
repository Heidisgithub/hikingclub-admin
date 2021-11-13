import './App.css';
import { NavLink } from "react-router-dom";
import EntityList from "./EntityList";
import {useState} from "react";
import { useEffect } from 'react/cjs/react.development';



function App() {

  const[loggedIn, setLoggedIn] = useState(false)

  async function login(email, password) {
    console.log(email)
    console.log(password)
  
    let jsonResponse = { error: "unknown" };
    const url = `${process.env.REACT_APP_DEV_URL_HOMEPAGE}/login`
    const myInit = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({email, password})
    }
    const response = await fetch(url, myInit)
    if (response.ok) {
      jsonResponse = await response.json()
      localStorage.setItem("sessionId", jsonResponse.sessionId)
      setLoggedIn(true)
    } else {
      console.log("login unsuccessful")
      logOut();
    }
  }

  

useEffect(() => {
  if(localStorage.getItem('sessionId')){
    setLoggedIn(true)
  }
  
}, [])

  const envUrl = () => {
    if (process.env.NODE_ENV === 'development') {
      return process.env.REACT_APP_DEV_URL_HOMEPAGE
    } else {
      return 'https://wbshikingclub.herokuapp.com/'
    }
  }

  const logOut = () => {
    localStorage.clear(); setLoggedIn(false)
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <nav className="NavButtons">
          <div className="logout">
            <button onClick={logOut}>Log out</button>
          </div>
          <NavLink
          to="/hikes"
          activeClassName="selected"
          >
            Hikes
          </NavLink >

          <NavLink
          to="/news"
          activeClassName="selected"
          >
            News
          </NavLink >

          <NavLink
          to="/registrations"
          activeClassName="selected"
          >
            Registrations
          </NavLink >
        </nav>
      </header>

      <EntityList login={login} loggedIn={loggedIn} logOut={logOut} />
    </div>
  );
}

export default App;
