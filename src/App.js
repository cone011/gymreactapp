/*import logo from './logo.svg';*/
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import SectionInitial from "./components/Home/SectionInitial";
import Layout from "./components/Layout/Layout";
import TypeExercise from "./Pages/TypeExercise";
function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path="/home" exact>
          <SectionInitial />
        </Route>
        <Route path="/new-type" exact>
          <TypeExercise />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
