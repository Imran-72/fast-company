import React from "react";

const SearchStatus = ({ length }) => {
  const renderPhrase = () => {
    if (length >= 5) {
      return " Человек тусанёт с тобой сегодня";
    }
    if (length < 5 && length > 1) {
      return " Человек тусанут с тобой сегодня";
    }
    if (length < 2) {
      if (length < 1) {
        return " Ни кто не тусанёт с тобой сегодня";
      }
      return " Человек тусанёт с тобой сегодня";
    }
  };

  return (
    <h5>
      <span className={length ? "badge bg-primary m-1" : "badge bg-danger m-1"}>
        {length || null}
        {renderPhrase()}
      </span>
    </h5>
  );
};

export default SearchStatus;
