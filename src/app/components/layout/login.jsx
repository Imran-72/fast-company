import React, { useState, useEffect } from "react";
import TextField from "../TextField";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [, setErrors] = useState();

  useEffect(() => {
    validate();
  }, [data]);
  const validate = () => {
    const errors = {};
    for (const fieldName in data) {
      if (data[fieldName] === "") {
        errors[fieldName] = `${fieldName} обязятельно для заполнения`;
      }
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log(data);
  };

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: [target.value],
    }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Электронная почта"
        name="email"
        value={data.email}
        onChange={handleChange}
      />
      <TextField
        label="Пароль"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
