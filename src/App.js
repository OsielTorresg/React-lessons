import "./App.css";
// import Functional from "./components/functional";
// import ClassC from "./components/classC";
// import Greet from "./components/greet";
// import Welcome from "./components/welcome";
// import Color from "./components/color";
// import Counter from "./components/counter";
import StateTutorial from "./useState/StateExample";
import ReducerExample from "./useReducer/ReducerExample";
import EffectExample from "./useEffect/EffectExample";

function App() {
  return (
    <div className="App">
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
      <StateTutorial />
      <ReducerExample />
      <EffectExample />
    </div>
  );
}

export default App;
