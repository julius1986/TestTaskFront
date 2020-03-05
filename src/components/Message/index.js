import React from "react";

export default function warningMessage(props) {    

return props.isShow ? null : (
  <div className={props.className}>{props.text}</div>
);
}
