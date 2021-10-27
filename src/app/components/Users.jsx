import React, { useEffect, useState } from "react";
import { paginate } from "../../utils/paginate";
import Pagination from "./Pagination";
import User from "./User";
import propTypes from "prop-types";
import GroupList from "./groupList";
import api from "../api";
import SearchStatus from "./SearchStatus";

const Users = ({ users, ...rest }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [professions, setProfessions] = useState();
  const [selectedProf, setSelectedProf] = useState();
  const pageSize = 4;
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfessions(data));
  }, [professions]);

  const handleItemSelect = (item) => {
    console.log(item);
    setSelectedProf(item);
  };
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedProf]);

  const clearFilter = () => {
    setSelectedProf();
  };
  const filteredUsers = selectedProf
    ? users.filter((user) => user.profession === selectedProf)
    : users;
  const count = filteredUsers.length;

  const userCrop = paginate(filteredUsers, currentPage, pageSize);

  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex flex-column flex-shrink p-3">
        <GroupList
          items={professions}
          onItemSelect={handleItemSelect}
          selectedProf={selectedProf}
        />
        <button className="btn btn-secondary mt-2" onClick={clearFilter}>
          Cброс
        </button>
      </div>
      <div className="d-flex flex-column">
        <SearchStatus length={count} />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {userCrop.map((user) => (
              <User {...rest} {...user} />
            ))}
          </tbody>
        </table>
        <div className="d-flex justify-content-center">
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

Users.propTypes = {
  users: propTypes.object.isRequired,
};
export default Users;
