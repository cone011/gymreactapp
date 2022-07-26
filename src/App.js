/*import logo from './logo.svg';*/
import "./App.css";
import SectionInitial from "./components/Home/SectionInitial";
import Layout from "./components/Layout/Layout";
import ExcersiceScreen from "./Pages/ExersiceScreen";
import TypeExerciseScreen from "./Pages/TypeExerciseScreen";

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
      <ExcersiceScreen />
    </Layout>
  );
}

export default App;
