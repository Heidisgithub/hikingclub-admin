import './App.css';
import { NavLink } from "react-router-dom";
import EntityList from "./EntityList"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="logout">Log out</div>
        <nav class="NavButtons">
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
