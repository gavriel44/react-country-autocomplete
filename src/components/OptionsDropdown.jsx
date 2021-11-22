import React from "react";
import Option from "./Option";

export default function OptionsDropdown(props) {
  const optionsJson = props.optionsJson;

  return (
    <div className="options-dropdown">
      {optionsJson.map((country) => {
        return (
          <Option
            key={country.name}
            onClick={() => {
              props.clickHandler(country.name);
            }}
            country={country}
          />
        );
      })}
    </div>
  );
}
