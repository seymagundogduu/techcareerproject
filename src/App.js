//import "./App.css";
import "antd/dist/antd.css";
import Anasayfa from "./components/Anasayfa";

import React, { useState } from "react";

function App() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const database = [
    {
      username: "dgpays@mail.com",
      password: "123",
    },
    {
      username: "seymagundogdu@gmail.com",
      password: "1234",
    }
  ];
  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    var { username, password } = document.forms[0];

    const userData = database.find((user) => user.username === username.value);

    if (userData) {
      if (userData.password !== password.value) {
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ name: "username", message: errors.username });
    }
  };

  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "35px",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            color:"blue"
          }}
        >
          Login 
        </h1>
        <div>
          <label style={{ fontSize: "25px" , color: "purple" }}>Mail :</label>
          <input type="text" name="username" required />
          {renderErrorMessage("username")}
        </div>
        <div>
          <label style={{ fontSize: "25px" , color:"purple"}}>Password :</label>
          <input type="password" name="password" required />
          {renderErrorMessage("pass")}
        </div>
        <br></br>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <>
      <div>
        <div>
          {isSubmitted ? (
            <div>
              <Anasayfa />
            </div>
          ) : (
            renderForm
          )}
        </div>
      </div>
    </>
  );
}

export default App;