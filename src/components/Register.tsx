import React from "react";

import SignUpImage from "../assets/signup.svg";
import Inputs from "./Inputs";
import Button from "./Button";
import { BiError } from "react-icons/bi";

const Register = () => {
  return (
    <div className="h-screen flex bg-teal-200 justify-between items-center overflow-hidden">
      <div className="w-1/2">
        <img src={SignUpImage} alt="login" />
      </div>
      <div className="w-1/2 flex justify-center">
        <div className="bg-white w-2/3 flex flex-col items-center px-8 py-10 rounded-xl">
          <div className="flex flex-col items-start w-full">
            <h1 className="text-3xl font-bold text-neutral-800 mb-3">
              Create a new account
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
              name="email"
              type="email"
              value="someone@ramdom-mail.com"
              labelText="Email"
              placeholder="Enter Email"
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
            <Button
              label="Sign In"
              className="w-full bg-cyan-950 py-2 text-white mt-4 hover:cursor-pointer hover:bg-cyan-800 transition ease-in-out delay-100"
              disabled={true}
            />
            <p className="my-2">
              Already have an account?
              <span className="text-teal-600 hover:cursor-pointer ml-2 font-bold">
                Sing In
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
