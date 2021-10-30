import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../api";
import QualitiesList from "./QualitiesList";

const UserPage = ({ userId }) => {
  const history = useHistory();
  const [user, setUser] = useState();
  useEffect(() => {
    api.users.getById(userId).then((data) => setUser(data));
  }, []);

  const handleClick = () => {
    history.push("/users");
  };
  if (user) {
    return (
      <div>
        <h1>Имя: {user.name}</h1>
        <h2>Провфессия: {user.profession.name}</h2>
        <h3>
          Качества: <QualitiesList qualities={user.qualities} />
        </h3>
        <h4>Встретился, раз: {user.completedMeetings}</h4>
        <h2>Оценка: {user.rate}</h2>
        <button onClick={handleClick}>Back</button>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
};

export default UserPage;
