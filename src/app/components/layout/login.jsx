import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h2>Login</h2>
      <button className="btn btn-success m-2">
        <Link to="/">Назад</Link>
      </button>
    </>
  );
};

export default Login;
