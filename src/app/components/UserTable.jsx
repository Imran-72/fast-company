import React from "react";
import propTypes from "prop-types";
import User from "./User";

const UserTable = ({ users, onSort, currentSort, ...rest }) => {
  const handleSort = (item) => {
    if (currentSort.iter === item) {
      onSort({
        ...currentSort,
        order: currentSort.order === "asc" ? "desc" : "asc",
      });
    } else {
      onSort({ iter: item, order: "asc" });
    }
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => handleSort("name")} scope="col">
            Имя
          </th>
          <th scope="col">Качества</th>
          <th onClick={() => handleSort("profession.name")} scope="col">
            Провфессия
          </th>
          <th onClick={() => handleSort("completedMeetings")} scope="col">
            Встретился, раз
          </th>
          <th onClick={() => handleSort("rate")} scope="col">
            Оценка
          </th>
          <th onClick={() => handleSort("bookmark")} scope="col">
            Избранное
          </th>
          <th />
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <User {...rest} {...user} key={user._id} />
        ))}
      </tbody>
    </table>
  );
};

UserTable.propTypes = {
  users: propTypes.array.isRequired,
  onSort: propTypes.func.isRequired,
  currentSort: propTypes.object.isRequired,
};

export default UserTable;
