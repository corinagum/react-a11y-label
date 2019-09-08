import React from "react";
import "./App.css";
import ReactAccessibilityLabel from "react-a11y-label";

function App() {
  const text = "Try out this accessible component!";
  return (
    <main className="App">
      <header className="App-header">
        <ReactAccessibilityLabel text={text} />
        <p aria-hidden="true">{text + "hi"}</p>
      </header>
    </main>
  );
}

export default App;
