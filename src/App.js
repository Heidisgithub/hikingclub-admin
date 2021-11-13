import './App.css';
import { NavLink } from "react-router-dom";
import EntityList from "./EntityList"
import {useEffect} from 'react'

async function login(email, password) {
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
  } else {
    console.log("login unsuccessful")
  }
}

function App() {
  useEffect(()=>{
    login(process.env.REACT_APP_DEV_ADMIN_EMAIL, process.env.REACT_APP_DEV_ADMIN_PW)
  }, [])

  const envUrl = () => {
    if (process.env.NODE_ENV === 'development') {
      return process.env.REACT_APP_DEV_URL_HOMEPAGE
    } else {
      return 'https://wbshikingclub.herokuapp.com/'
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        
        <nav className="NavButtons">
          <div className="logout">
            <a href={envUrl()}>Log out</a>
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

      <EntityList />
    </div>
  );
}

export default App;
