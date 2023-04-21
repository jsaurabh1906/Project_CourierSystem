import React from "react";

const Child = (props) => {
  return (
    <div>
      <h2>Child component</h2>

      <h4>{props.data}</h4>
    </div>
  );
};

export default Child;
