import React from "react";
import propTypes from "prop-types";

const GroupList = ({
  items,
  onItemSelect,
  valueProperty,
  contentProperty,
  selectedProf,
}) => {
  if (!Array.isArray(items)) {
    return (
      <ul className="list-group">
        {Object.keys(items).map((item) => (
          <li
            className={
              "list-group-item " +
              (selectedProf === items[item] ? "active" : "")
            }
            key={items[item][valueProperty]}
            onClick={() => onItemSelect(items[item])}
            role="button"
          >
            {items[item][contentProperty]}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          className={
            "list-group-item " + (selectedProf === item ? "active" : "")
          }
          key={item[valueProperty]}
          onClick={() => onItemSelect(item)}
          role="button"
        >
          {item[contentProperty]}
        </li>
      ))}
    </ul>
  );
};

GroupList.defaultProps = {
  valueProperty: "_id",
  contentProperty: "name",
};
GroupList.propTypes = {
  items: propTypes.oneOfType([propTypes.object, propTypes.array]),
  onItemSelect: propTypes.func.isRequired,
  valueProperty: propTypes.string.isRequired,
  contentProperty: propTypes.string.isRequired,
  selectedProf: propTypes.object.isRequired,
};
export default GroupList;
