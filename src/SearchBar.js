import "./SearchBar.css";
import Input from "./components/Input";
import OptionsDropdown from "./components/OptionsDropdown";
import { useRef, useEffect, useState, useReducer } from "react";
import countriesJson from "./countries";
import useFilteredJson from "./components/useFilteredJson";

function SearchBar() {
  const dropdownElementRef = useRef(null);
  const inputElementRef = useRef(null);
  const [value, setValue] = useState("");
  const [filteredCountries, setFilteredCountries] = useFilteredJson(
    value,
    countriesJson
  );

  useEffect(() => {
    dropdownElementRef.current.style.display = "none";
  }, []);

  function handleChange(e) {
    setValue(e.target.value);
    dropdownElementRef.current.style.display = "";
  }

  function clickHandler(value) {
    setValue(value);
    dropdownElementRef.current.style.display = "none";

    setTimeout(() => {
      setFilteredCountries(countriesJson);
    }, 20);
  }

  return (
    <div className="SearchBar">
      <Input
        inputRef={inputElementRef}
        value={value}
        onMouseDown={() => {
          dropdownElementRef.current.style.display = "";
        }}
        onChange={handleChange}
        onBlur={() => {
          console.log("blur");
          dropdownElementRef.current.style.display = "none";
          setFilteredCountries(countriesJson);
        }}
      />

      <div ref={dropdownElementRef}>
        <OptionsDropdown
          optionsJson={filteredCountries}
          clickHandler={clickHandler}
        />
      </div>
      {value === "" ? null : (
        <button
          onClick={() => {
            clickHandler("");
          }}
          onMouseDown={(e) => {
            e.preventDefault();
          }}
        >
          X
        </button>
      )}
      <button
        onClick={() => {
          const currentDisplay = dropdownElementRef.current.style.display;
          dropdownElementRef.current.style.display =
            currentDisplay === "" ? "none" : "";
          inputElementRef.current.focus();
        }}
      >
        Toggle
      </button>
    </div>
  );
}

export default SearchBar;
