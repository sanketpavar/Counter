import React, { useContext } from "react";
import { HomeContext } from "./App";

function Counter() {
  const { handleChange, count, setshowModal, showModal } =
    useContext(HomeContext);
  return (
    <>
      <div className="counterBody">
        <button className="minus" onClick={() => handleChange("decrement")}>
          -
        </button>
        <button className="count" onClick={() => setshowModal(!showModal)}>
          {count}
        </button>
        <button className="plus" onClick={() => handleChange("increment")}>
          +
        </button>
      </div>
    </>
  );
}

export default Counter;
