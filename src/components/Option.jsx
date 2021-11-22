import React from "react";

export default function Option(props) {
  const country = props.country;
  return <div>{country.name + country.code}</div>;
}
