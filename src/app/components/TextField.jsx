import React from "react";
import propTypes from "prop-types";

const TextField = ({ label, type, name, value, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

TextField.defaultProps = {
  type: "text",
};

TextField.propTypes = {
  label: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  value: propTypes.object.isRequired,
  onChange: propTypes.func.isRequired,
};
export default TextField;
