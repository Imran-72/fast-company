import React from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import propTypes from "prop-types";

const Table = ({ onSort, selectedSort, columns, data, children }) => {
  return (
    <table className="table">
      {children || (
        <>
          <TableHeader {...{ onSort, selectedSort, columns }} />
          <TableBody {...{ columns, data }} />
        </>
      )}
    </table>
  );
};

Table.propTypes = {
  onSort: propTypes.func.isRequired,
  selectedSort: propTypes.object.isRequired,
  columns: propTypes.object.isRequired,
  data: propTypes.array.isRequired,
  children: propTypes.array.isRequired,
};
export default Table;
