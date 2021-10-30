import React from "react";
import propTypes from "prop-types";

const TableHeader = ({ onSort, selectedSort, columns }) => {
  console.log("selectedSort", selectedSort);
  const handleSort = (item) => {
    if (selectedSort.path === item) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === "asc" ? "desc" : "asc",
      });
    } else {
      onSort({ path: item, order: "asc" });
    }
  };

  const renderSortArrow = (currentPath) => {
    if (currentPath && currentPath === selectedSort.path) {
      return (
        <i
          className={
            "bi bi-caret" +
            (selectedSort.order === "desc" ? "-down-fill" : "-up-fill")
          }
        />
      );
    }
  };
  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column) => (
          <th
            key={column}
            onClick={
              columns[column].path
                ? () => handleSort(columns[column].path)
                : undefined
            }
            {...{ role: columns[column].path && "button" }}
            scope="col"
          >
            {columns[column].name}
            {renderSortArrow(columns[column].path)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

TableHeader.propTypes = {
  onSort: propTypes.func.isRequired,
  selectedSort: propTypes.object.isRequired,
  columns: propTypes.object.isRequired,
};
export default TableHeader;
