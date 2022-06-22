import React, { useState } from "react";
import CustomDropdown from "./CustomDropdown";
import "./Custom.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    let arrEmail = email.split("");
    if (!arrEmail.includes("@") && !arrEmail.includes(".")) {
      setErrorEmail("Please enter the valid email");
    } else {
      setErrorEmail("");
    }
    let arrPassword = password.split("");
    let numberedArr = arrPassword.map((e) => Number(e));
    let checkValid = 0;
    numberedArr.forEach((ele) => (checkValid += ele));
    checkValid !== 10
      ? setErrorPassword("Please enter the valid password")
      : setErrorPassword("");
    checkValid === 10 && arrEmail.includes("@") && arrEmail.includes(".")
      ? setIsValid(true)
      : setIsValid(false);
    e.preventDefault();
  };
  return (
    <div>
      {isValid === false ? (
        <div className="body">
          <div className="background">
            <div className="shape"></div>
            <div className="shape"></div>
          </div>
          <form>
            <h3>Login Here</h3>

            <label>Email</label>
            <input
              type="text"
              placeholder="Email or Phone"
              id="username"
              onChange={handleEmail}
            />
            <p style={{ color: "red", margin: "10px" }}>{errorEmail}</p>

            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={handlePassword}
            />
            <p style={{ color: "red", margin: "10px" }}>{errorPassword}</p>
            <button onClick={handleSubmit}>Log In</button>
          </form>
        </div>
      ) : (
        <CustomDropdown />
      )}
    </div>
  );
};

export default LoginForm;
