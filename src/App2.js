import React, { useState } from "react";
import Counter2 from "./Counter2";

export const AppContext = React.createContext();

function App2() {
  const initialState = { min: 1, max: 1000 };

  const [count, setcount] = useState(1);
  const [showMessage, setshowMessage] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (validateCount(value)) {
      setcount(value);
    } else {
      handleShowMessage();
    }
  };

  const handleShowMessage = () => {
    setshowMessage(true);
    setTimeout(() => {
      setshowMessage(false);
    }, 3000);
  };

  const handleChange = (action) => {
    switch (action) {
      case "increment":
        if (count < initialState.max) {
          return setcount((prevCount) => parseInt(prevCount) + 1);
        } else {
          handleShowMessage();
          return count;
        }

      case "decrement":
        if (count > initialState.min) {
          return setcount((prevCount) => parseInt(prevCount) - 1);
        } else {
          handleShowMessage();
          return count;
        }
      default:
        return count;
    }
  };

  const validateCount = (value) => {
    return value >= initialState.min && value <= initialState.max;
  };

  return (
    <AppContext.Provider value={{ handleChange, count, handleInputChange }}>
      <Counter2 />
      {showMessage && (
        <p className="alertMessage">Number should be between 1 and 1000</p>
      )}
    </AppContext.Provider>
  );
}

export default App2;
