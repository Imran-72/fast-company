import React, { useState } from "react";
import { useParams } from "react-router";
import LoginForm from "../components/ui/loginForm";
import RegisterFrom from "../components/ui/registerForm";

const Login = () => {
  const { type } = useParams();
  const [formType, setFormType] = useState(
    type === "register" ? type : "login"
  );

  const toggleFromType = () => {
    setFormType((prevState) =>
      prevState === "register" ? "login" : "register"
    );
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div
          className="col-md-6 offset-md-3 shadow p-4"
          style={{ borderRadius: "10px" }}
        >
          {formType === "register" ? (
            <>
              <h3 className="mb-4">Register</h3>
              <RegisterFrom />
              <p>
                All ready have account?{" "}
                <a role="button" onClick={toggleFromType}>
                  Sign In
                </a>
              </p>
            </>
          ) : (
            <>
              <h3 className="mb-4">Login</h3>
              <LoginForm />
              <p>
                Dont have account?{" "}
                <a role="button" onClick={toggleFromType}>
                  Sign Up
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
