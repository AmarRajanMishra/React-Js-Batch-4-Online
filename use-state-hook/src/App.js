

import './App.css';
import ChangeColor from './ChangeColor';
import Counter from './Counter';
import GetInput from './GetInput';
import UseStateHook from './UseStateHook';

function App() {
  return (
    <div className="App">
      <h1>Hooks Concept </h1>
      <p>Hooks is Nothing but Function, Hooks Provide all the feature of Class Based Component 
        inside functional Component
      </p>
      <UseStateHook />
      {/* <Counter />
      <GetInput /> */}
      <ChangeColor />
    </div>
  );
}

export default App;
