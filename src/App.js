import './App.css';
import { NavLink } from "react-router-dom";
import EntityList from "./EntityList"

function App() {
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
          to="/hikers"
          activeClassName="selected"
          >
            Hikers
          </NavLink >
        </nav>
      </header>

      <EntityList />
    </div>
  );
}

export default App;
