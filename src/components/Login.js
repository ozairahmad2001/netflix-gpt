import React, { useState } from "react";
import Header from "./Header";
import netflixbg from "../assets/netflix-bg.jpg";

const Login = () => {
    const [isSignInFrom, setIsSignForm] = useState(true);
    const toggleForm = ()=>{
        setIsSignForm(!isSignInFrom);
    }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="object-cover" src={netflixbg} alt="bg-img" />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white opacity-80 rounded-lg">
        <h1 className="text-3xl font-semibold py-4">{isSignInFrom ? "Sign In" : "Sign Up"} </h1>
        {!isSignInFrom && <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 bg-gray-700 w-full"
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 bg-gray-700 w-full"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 my-4 bg-gray-700 w-full"
        />
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">
          Sign In
        </button>
        <p onClick={toggleForm} className="cursor-pointer py-4">{isSignInFrom ? "New to Netflix? Sign up now." : "Already registered? Go to Sign In."}</p>
      </form>
    </div>
  );
};

export default Login;
