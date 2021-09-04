import React, { useContext } from "react";
import { HomeContext } from "./App";

function Modal() {
  const { inputVal, handleInputChange, setMinMax, count, handleCount } =
    useContext(HomeContext);

  return (
    <div className="modalBody">
      <input
        className="currentValue"
        type="number"
        value={count}
        placeholder="Current Value"
        name="current"
        onChange={(e) => handleCount(e)}
      />

      <input
        className="minValue"
        type="number"
        placeholder="Min(Optional)"
        value={inputVal.min}
        name="min"
        onChange={(e) => handleInputChange(e)}
      />
      <input
        className="maxValue"
        type="number"
        placeholder="Max(Optional)"
        value={inputVal.max}
        name="max"
        onChange={(e) => handleInputChange(e)}
      />

      <button className="submit" onClick={() => setMinMax()}>
        {inputVal.min || inputVal.max ? `Submit` : `Close`}
      </button>
    </div>
  );
}

export default Modal;
