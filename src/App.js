import "./App.css";
import Input from "./components/Input";
import OptionsDropdown from "./components/OptionsDropdown";
import { useRef, useEffect, useState, useReducer } from "react";
import countriesJson from "./countries";

function reducer(state, action) {
  switch (action.type) {
    case "show":
      return { display: "" };

    case "hide":
      return { display: "none" };

    default:
      break;
  }
}

function App() {
  const [optionsDisplay, dispatch] = useReducer(reducer, { display: "none" });
  const optionsElement = useRef(null);
  const [isShowOptions, setIsShowOptions] = useState("none");
  const [value, setValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(countriesJson);

  useEffect(() => {
    const searchResult = countriesJson.filter((country) => {
      if (country.name.toLocaleLowerCase().includes(value)) {
        return true;
      }
      return false;
    });
    setFilteredOptions(searchResult);
  }, [value]);

  function handleChange(e) {
    setValue(e.target.value);
    dispatch({ type: "show" });
  }

  return (
    <div className="App">
      <Input
        value={value}
        onChange={handleChange}
        onBlur={() => {
          dispatch({ type: "hide" });
        }}
        onFocus={() => {
          dispatch({ type: "show" });
        }}
      />

      <div style={optionsDisplay}>
        <OptionsDropdown optionsJson={filteredOptions} />
      </div>
      <button
        onClick={() => {
          console.log("tes");
          setIsShowOptions("none");
        }}
      >
        test
      </button>
    </div>
  );
}

export default App;
