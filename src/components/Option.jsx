import React from "react";

export default function Option(props) {
  const country = props.country;
  return (
    <div
      onClick={props.onClick}
      onMouseDown={(e) => {
        e.preventDefault();
      }}
    >
      {country.name + country.code}
    </div>
  );
}
