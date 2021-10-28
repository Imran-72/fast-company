import React, { useEffect, useState } from "react";
import Users from "./components/Users";
import api from "./api";

const App = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    api.users.fetchAll().then((data) => setUsers(data));
  }, []);

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const handleToggleBookMark = (id) => {
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark };
        }
        return user;
      })
    );
  };

  return (
    <>
      {users && (
        <Users
          onDelete={handleDelete}
          onToggleBookMark={handleToggleBookMark}
          users={users}
        />
      )}
    </>
  );
};

export default App;
