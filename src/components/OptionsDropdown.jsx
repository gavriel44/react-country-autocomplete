import React from "react";
import countriesJson from "./countries";

export default function OptionsDropdown(props) {
  const query = props.query;
  const searchResult = countriesJson.filter((country) => {
    if (country.name.toLocaleLowerCase().includes(query)) {
      return true;
    }
    return false;
  });

  return (
    <div>
      {searchResult.map((country) => {
        return (
          <div className="option">{country.name + ": " + country.code}</div>
        );
      })}
    </div>
  );
}
