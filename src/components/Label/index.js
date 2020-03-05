import React from "react";

export default function label(props) {
  return (
    <label className="col-sm-2 col-form-label">
      {props.text}
    </label>
  );
}
