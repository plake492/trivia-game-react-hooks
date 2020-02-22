import React from "react";

function Question({ children, setAnswer }) {
  return (
    <div>
      <form>
        <label>a</label>
        <input
          onClick={() => setAnswer("correct")}
          type="radio"
          name="question"
        ></input>
        <label>b</label>
        <input
          onClick={() => setAnswer("incorrct")}
          type="radio"
          name="question"
        ></input>
        <label>c</label>
        <input
          onClick={() => setAnswer("incorrct")}
          type="radio"
          name="question"
        ></input>
        <label>d</label>
        <input
          onClick={() => setAnswer("incorrct")}
          type="radio"
          name="question"
        ></input>
      </form>
      {children}
    </div>
  );
}

export default Question;
