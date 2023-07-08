import React from "react";

import LoginImage from "../assets/login.svg";
import Inputs from "./Inputs";
import Button from "./Button";
import { BiError } from "react-icons/bi";

const SignIn = () => {
  return (
    <div className="h-screen flex justify-between items-center overflow-hidden">
      <div className="w-1/2">
        <img src={LoginImage} alt="login" />
      </div>
      <div className="w-1/2 flex justify-center">
        <div className="w-2/3 flex flex-col items-center bg-teal-400 px-8 py-10 rounded-lg">
          <div className="flex flex-col items-start w-full">
            <h1 className="text-3xl font-bold text-neutral-800 mb-3">
              Sign in to your account
            </h1>
            <div className="flex items-center text-sm p-2 bg-red-300 w-full my-2 text-red-950">
              <BiError className="mr-1 text-xl" />
              Error Message
            </div>
          </div>
          <form className="flex flex-col w-full">
            <Inputs
              name="username"
              type="text"
              value="Username"
              labelText="Username"
              placeholder="Enter Username"
              className="w-full border p-2 my-3 focus:shadow-md focus:shadow-cyan-150 outline-none transition-shadow ease-out delay-200"
            />
            <Inputs
              name="password"
              type="password"
              value="Password"
              labelText="Password"
              placeholder="Enter Password"
              className="w-full border p-2 my-3 focus:shadow-md focus:shadow-cyan-150 outline-none transition-shadow ease-out delay-200"
            />
            <label className="flex items-center" htmlFor="checkbox">
              <Inputs name="checkbox" type="checkbox" value={false} />
              <span className="ml-1">Remember Me</span>
            </label>
            <Button
              label="Sign In"
              className="w-full bg-cyan-950 py-2 text-white mt-4 hover:cursor-pointer hover:bg-cyan-800 transition ease-in-out delay-100"
              disabled={true}
            />
            <p className="flex justify-end text-teal-900 font-medium hover:cursor-pointer my-2">
              Forgot Password?
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
