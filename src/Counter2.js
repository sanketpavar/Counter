import React, { useContext } from "react";
import { AppContext } from "./App2";

function Counter2() {
  const { handleChange, count, handleInputChange } = useContext(AppContext);
  return (
    <>
      <div className="counterBody">
        <button
          className="minus"
          name="decrement"
          onClick={(e) => handleChange(e.target.name)}
        >
          -
        </button>
        <input
          className="count"
          type="text"
          value={count}
          onChange={(e) => handleInputChange(e)}
        />
        <button
          className="plus"
          name="increment"
          onClick={(e) => handleChange(e.target.name)}
        >
          +
        </button>
      </div>
    </>
  );
}

export default Counter2;
