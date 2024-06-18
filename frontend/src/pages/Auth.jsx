import React from "react";
import Login from "../components/Login";
import Signup from "../components/SignUp";
import { useState } from "react";

function Auth() {
  const [status, Setstatus] = useState("login");
  const handleAuthForm = (val) => {
    Setstatus(val);
  };
  return (
    <div className="justify-center flex flex-col h-[80%] w-full ">
      <div className="h-fit  w-fit bg-red-400 m-auto p-2 rounded-3xl flex flex-col ">
        {status === "login" ? <Login /> : <Signup />}
        {status === "login" ? (
          <p className="self-end">
            <span className="text-">Create New Account.</span>{" "}
            <button
              onClick={() => handleAuthForm("signup")}
              className="text-orange-800 font-bold"
            >
              Signup
            </button>
          </p>
        ) : (
          <p className="self-end">
            <span className="text-white">Already Registered ?</span>
            <button
              onClick={() => handleAuthForm("login")}
              className="text-orange-800 font-bold"
            >
              Login
            </button>
          </p>
        )}
      </div>
    </div>
  );
}

export default Auth;
