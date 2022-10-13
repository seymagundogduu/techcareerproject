import React from "react";
import { Navigate } from "react-router-dom";

function Login({ children }) {
  const userLogin = [
    {
      mail: "symagn2@gmail.com",
      password: 123,
    },
  ];
  if (!userLogin) {
    return children;
  } 
  else {
    <Navigate to="/addCustomer" replace={true} />
  }

  <>
    <label> {Login.mail}</label>
    <label> {Login.password}</label>
  </>;
}

export default Login;
