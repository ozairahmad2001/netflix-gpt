import React, { useEffect } from "react";
import logo from "../assets/Netflix_Logo_PMS.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        //will route to an error page once I make it.
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return ()=>unsubscribe();
    //unsubscribe to onAuthStateChanged when the component unmounts.
  }, []);
  return (
    <div className="absolute z-10 w-screen px-8 py-1 bg-gradient-to-b from-black flex justify-between">
      <img className="w-44 mx-auto md:mx-0" src={logo} alt="logo" />

      {user && (
        <div className="flex p-1">
          <img className="h-12" src={user?.photoURL} alt="display-pic" />
          <button onClick={handleSignOut} className="font-bold text-lg text-white">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
