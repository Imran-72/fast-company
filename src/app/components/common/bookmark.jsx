import React from "react";
import PropTypes from "prop-types";
const BookMark = ({ status, ...rest }) => {
  return (
    <div {...rest} role="button">
      <i className={"bi bi-bookmark" + (status ? "-heart-fill" : "")}></i>
    </div>
  );
};
BookMark.propTypes = {
  status: PropTypes.bool,
};

export default BookMark;
