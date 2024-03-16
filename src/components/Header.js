import React from "react";
import logo from "../assets/Netflix_Logo_PMS.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        //will route to an error page once I make it.
      });
  };
  return (
    <div className=" absolute z-10 w-screen px-8 py-1 bg-gradient-to-b from-black flex justify-between">
      <img className="w-44 mx-auto md:mx-0" src={logo} alt="logo" />

      {user && <div className="flex p-1">
        <img className="h-12"src={user?.photoURL} alt="display-pic" />
        <button onClick={handleSignOut} className="font-bold text-lg">
          Sign Out
        </button>
      </div>}
    </div>
  );
};

export default Header;
