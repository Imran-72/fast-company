import React from "react";
import propTypes, { oneOfType } from "prop-types";

const GroupList = ({
  items,
  valueProperty,
  contentProperty,
  onItemSelect,
  selectedProf,
}) => {
  return (
    <ul className="list-group">
      {Object.keys({ ...items }).map((item) => (
        <li
          className={
            "list-group-item" + (items[item] === selectedProf ? " active" : "")
          }
          role="button"
          onClick={() => onItemSelect(items[item])}
          key={items[item][valueProperty]}
        >
          {items[item][contentProperty]}
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
  items: oneOfType([propTypes.object, propTypes.array]),
  valueProperty: propTypes.string.isRequired,
  contentProperty: propTypes.string.isRequired,
  selectedProf: propTypes.object.isRequired,
  onItemSelect: propTypes.func.isRequired,
};
export default GroupList;
