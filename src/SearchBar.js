import "./SearchBar.css";
import Input from "./components/Input";
import OptionsDropdown from "./components/OptionsDropdown";
import { useRef, useEffect, useState } from "react";
import countriesJson from "./countries";
import useFilteredJson from "./hooks/useFilteredJson";

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
      <div className="input-section">
        <Input
          inputRef={inputElementRef}
          value={value}
          onMouseDown={() => {
            dropdownElementRef.current.style.display = "";
          }}
          onChange={handleChange}
          onBlur={() => {
            console.log("blur");
            setValue("");
            dropdownElementRef.current.style.display = "none";
          }}
        />
        {value === "" ? null : (
          <button
            id="remove"
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
          id="toggle"
          onMouseDown={(e) => {
            e.preventDefault();
          }}
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

      <div ref={dropdownElementRef}>
        <OptionsDropdown
          optionsJson={filteredCountries}
          clickHandler={clickHandler}
        />
      </div>
    </div>
  );
}

export default SearchBar;
