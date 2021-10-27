import React from "react";

const Qualities = ({ color, name, _id }) => {
  return (
    <span key={_id} className={`badge m-1 bg-${color}`}>
      {name}
    </span>
  );
};

export default Qualities;
