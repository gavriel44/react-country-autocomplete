import React from "react";
import Form from "react-bootstrap/Form";

export default function Input(props) {
  return (
    <div className="input">
      <Form.Control
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        onMouseDown={props.onMouseDown}
        ref={props.inputRef}
      />
    </div>
  );
}
