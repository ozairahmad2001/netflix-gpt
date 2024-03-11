import React from "react";
import logo from "../assets/Netflix_Logo_PMS.png";

const Header = () => {
  return (
    <div className="absolute z-10 w-screen px-8 py-1 bg-gradient-to-t from-black ">
      <img className="w-44 mx-auto md:mx-0" src={logo} alt="logo" />
    </div>
  );
};

export default Header;
