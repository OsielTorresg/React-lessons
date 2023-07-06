import "./App.css";
// import Functional from "./components/functional";
// import ClassC from "./components/classC";
// import Greet from "./components/greet";
// import Welcome from "./components/welcome";
// import Color from "./components/color";
// import Counter from "./components/counter";
// import StateTutorial from "./useState/StateExample";
// import ReducerExample from "./useReducer/ReducerExample";
// import EffectExample from "./useEffect/EffectExample";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>

      {/* <Functional />
      <ClassC />
      <Greet name="Osiel" heroName="spiderMan" />
      <Greet name="Nate" heroName="BlackSpiderMan" />
      <Greet name="Aubrey" heroName="BatMan" />
      <Greet name="Wayne" heroName="Flash" />
      <Greet name="Natalie" heroName="DeadPool" />
      <Welcome name="Johnson" heroName="JonDoe" />
      <Welcome name="Nate" heroName="TomatoeMan" />
      <Color />
      <Counter /> */}
      {/* <StateTutorial />
      <ReducerExample />
      <EffectExample /> */}
    </div>
  );
}

export default App;
