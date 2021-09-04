import React, { useState } from "react";
import Counter from "./Counter";
import Modal from "./Modal";

export const HomeContext = React.createContext();

function App() {
  // initial min & max state
  const initialState = { min: 1, max: 1000 };

  // useState
  const [showModal, setshowModal] = useState(false);
  const [showMessage, setshowMessage] = useState(false);

  const handleShowMessage = () => {
    setshowMessage(true);
    setTimeout(() => {
      setshowMessage(false);
    }, 2000);
  };

  const [userInput, setuserInput] = useState({
    max: initialState.max,
    min: initialState.min,
  });
  const [count, setcount] = useState(initialState.min);
  const [inputVal, setinputVal] = useState({ min: "", max: "" });

  // handle input change from min and max
  const handleInputChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setinputVal({ ...inputVal, [key]: value });
  };

  // handle modal counter input
  const handleCount = (e) => {
    const value = parseInt(e.target.value);
    if (value >= userInput.min && value <= userInput.max) {
      return setcount(value);
    }
    handleShowMessage();
    return count;
  };

  // set minimum and maximum value
  const setMinMax = () => {
    const min = inputVal.min || userInput.min;
    const max = inputVal.max || userInput.max;

    const newUserInput = { min, max };

    setuserInput({ ...newUserInput });
    if (count < min) {
      setcount(parseInt(min));
    } else if (count > max) {
      setcount(parseInt(max));
    }

    setinputVal({ ...inputVal, min: "", max: "" });
    setshowModal(!showModal);
  };

  // handle increment and decrement
  const handleChange = (action) => {
    switch (action) {
      case "decrement":
        return validateValue(action)
          ? setcount((prevCount) => parseInt(prevCount) - 1)
          : (function () {
              console.log("hello");
              handleShowMessage();
              return count;
            })();
      case "increment":
        return validateValue(action)
          ? setcount((prevCount) => parseInt(prevCount) + 1)
          : (function () {
              console.log("hello");
              handleShowMessage();
              return count;
            })();
      default:
        return initialState;
    }
  };

  // validate value for greater or smaller than count
  const validateValue = (action) => {
    switch (action) {
      case "increment":
        return count < userInput.max ? true : false;
      case "decrement":
        return count > userInput.min ? true : false;
      default:
        return initialState;
    }
  };

  return (
    <HomeContext.Provider
      value={{
        count,
        handleChange,
        inputVal,
        handleInputChange,
        setMinMax,
        setshowModal,
        showModal,
        handleCount,
      }}
    >
      {!showModal && <Counter />}
      {showModal && <Modal />}
      {showMessage && <p className="alertMessage">Number not in range</p>}
    </HomeContext.Provider>
  );
}

export default App;
