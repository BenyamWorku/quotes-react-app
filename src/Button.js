import React from "react";

export default function Button(props) {
  return (
    <div>
      <button onClick={props.handleClick}>Generate Random Quote</button>
    </div>
  );
}
