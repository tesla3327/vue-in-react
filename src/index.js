import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import VueWrapper from "./VueWrapper";
import VueComponent from "./VueComponent";
import VueButton from "./VueButton";
import ReactComponent from "./ReactComponent";

function App() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(5);

  return (
    <div className="App">
      <div>
        <button onClick={() => setCount(count + 1)}>Count + 1</button>
        <button onClick={() => setCount(count - 1)}>Count - 1</button>
        <VueWrapper component={VueButton} onClick={() => setCount(count + 10)}>
          <ReactComponent />
          Vue Button
        </VueWrapper>
      </div>
      Count from React: {count}
      <VueWrapper component={VueComponent} count={count} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
