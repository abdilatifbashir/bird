import React, { useState } from "react";
import About from "./About";
import { Link } from "react-router-dom";

export default function Join() {
  const headerStyle = {
    TextAlign: "center",
    marginLeft: "570px",
    marginTop: "100px",
  };
  const formStyle = {
    TextAlign: "center",
    marginLeft: "460px",
    marginTop: "40px",
  };
  const fieldStyle = {
    width: "500px",
    marginTop: "20px",
    textAlign: "center",
    fontSize: "30px",
    color: "black",
  };
  const linkStyle = {
    TextDecoration: "none",
  };
  const btnStyle = {
    display: "block",
    paddingBottom: "5px",
    border: "3px solid black",
    width: "200px",
    height: "44px",

    bordeSspacing: "15px",
    textAlign: "center",
    marginLeft: "250px",
    marginTop: "20px",
    cursor: "pointer",
  };
  const [loginCredentials, setLoginValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [login, setLogin] = useState(true);

  const formHandler = (e) => {
    e.preventDefault();
    setLoginValues({ ...loginCredentials, [e.target.name]: e.target.value });
  };
  console.log("logins", loginCredentials);
  return login == false ? (
    <div className="container-1">
      <div className="left-section">sheikh</div>
      <div className="main-section">
        <div>
          {" "}
          <About firstName={loginCredentials.firstName} />
        </div>
        <div
          style={{
            TextAlign: "center",
            marginLeft: "460px",
            marginTop: "100px",
          }}
        >
          <h1 style={{ marginLeft: "130px" }}>complete your account</h1>
          <span style={{ marginRight: "0px", fontSize: "20px" }}>
            Add your address,get your free mearing soft tape and measuring your
            profile,easy <br />
            <span style={{ marginLeft: "350px" }}>right?</span>
            <div>
              <span style={btnStyle}>
                <h2>Account</h2>
              </span>
            </div>
          </span>
        </div>
      </div>
      <div className="right-section">sheikh</div>
    </div>
  ) : (
    <div className="container-1">
      <div className="left-section">sheikh</div>
      <div className="main-section">
        <div>
          {" "}
          <About />
        </div>
        <div style={headerStyle}>
          <h1>Join us for free!</h1>
          <span style={{ marginLeft: "10px", fontSize: "20px" }}>
            Together we make new system
          </span>
        </div>

        <div style={formStyle}>
          <div>
            <span style={{ paddingRight: "15px" }}>
              <input
                type="text"
                name="firstName"
                required
                placeholder="First Name"
                style={{ height: "40px", textAlign: "center" }}
                onChange={formHandler}
              />
            </span>
            <span>
              <input
                type="text"
                name="lastName"
                required
                placeholder="Last Name"
                style={{ height: "40px", textAlign: "center" }}
                onChange={formHandler}
              />
            </span>
          </div>
          <div>
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              style={fieldStyle}
              onChange={formHandler}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              style={fieldStyle}
              onChange={formHandler}
            />
          </div>
          <div>
            <input
              type="password"
              name="confirmPassword"
              required
              placeholder="Comfirm Password"
              style={fieldStyle}
              onChange={formHandler}
            />
          </div>
          <div>
            <button
              onClick={() => setLogin(false)}
              style={{
                marginLeft: "200px",
                marginTop: "30px",
                width: "130px",
                height: "40px",
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="right-section"></div>
    </div>
  );
}
