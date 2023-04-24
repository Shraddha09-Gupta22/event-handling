import React, { useState } from "react";

function App() {
  const [headingText, setHeading] = useState("Hello");
  //var but = false;
  function handleClick() {
    setHeading("Submitted");
  }

  const [isMouseOver, setMouseOver] = useState(false);
  function mouseOver() {
    setMouseOver(true);
  }

  function mouseOut() {
    setMouseOver(false);
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
