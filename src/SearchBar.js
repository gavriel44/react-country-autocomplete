import "./SearchBar.css";
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

function SearchBar() {
  const [optionsDisplay, dispatch] = useReducer(reducer, { display: "none" });
  const filterReference = useRef(null);
  const [value, setValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(countriesJson);

  useEffect(() => {
    const searchResult = countriesJson.filter((country) => {
      if (
        country.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      ) {
        return true;
      }
      return false;
    });
    console.log("ref", filterReference.current);
    if (!filterReference.current) {
      setFilteredOptions(searchResult);
    } else {
      setFilteredOptions(countriesJson);
    }
  }, [value]);

  function handleChange(e) {
    filterReference.current = false;
    setValue(e.target.value);
    dispatch({ type: "show" });
  }

  function clickHandler(value) {
    filterReference.current = true;
    setValue(value);
    dispatch({ type: "hide" });
    setFilteredOptions(countriesJson);
  }

  return (
    <div className="SearchBar">
      <Input
        value={value}
        onMouseDown={() => {
          dispatch({ type: "show" });
        }}
        onChange={handleChange}
        onBlur={() => {
          console.log("blur");
          dispatch({ type: "hide" });
        }}
      />

      <div style={optionsDisplay}>
        <OptionsDropdown
          optionsJson={filteredOptions}
          clickHandler={clickHandler}
        />
      </div>
      <button
        onClick={() => {
          console.log("tes");
        }}
      >
        test
      </button>
    </div>
  );
}

export default SearchBar;
