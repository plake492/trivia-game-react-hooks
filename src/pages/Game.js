import React, { useState, Fragment } from "react";
import Question from "../components/Question";

function Game() {
  const [answer, setAnswer] = useState("");

  const handelSubmit = e => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <Question setAnswer={setAnswer}>
        <button onClick={handelSubmit}>Check Answer</button>
      </Question>
    </Fragment>
  );
}

export default Game;
