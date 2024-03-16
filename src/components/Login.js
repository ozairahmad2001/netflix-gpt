import React, { useState, useRef } from "react";
import Header from "./Header";
import netflixbg from "../assets/netflix-bg.jpg";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInFrom, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const toggleForm = () => {
    setIsSignForm(!isSignInFrom);
  };

  const handleSubmitButton = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (!isSignInFrom) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/97622464?v=4"
          }).then(() => {
            // Profile updated!
            navigate("/browse");
            const { uid, email, displayName, photoURL } = user;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL}))

          }).catch((error) => {
            // An error occurred
            // ...
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="object-cover" src={netflixbg} alt="bg-img" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto left-0 right-0 text-white opacity-80 rounded-lg">
        <h1 className="text-3xl font-semibold py-4">
          {isSignInFrom ? "Sign In" : "Sign Up"}{" "}
        </h1>
        {!isSignInFrom && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 bg-gray-700 w-full"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 bg-gray-700 w-full"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-gray-700 w-full"
        />
        <p>{errorMessage}</p>
        <button
          onClick={handleSubmitButton}
          className="p-4 my-4 bg-red-700 w-full rounded-lg">
          Sign In
        </button>
        <p onClick={toggleForm} className="cursor-pointer py-4">
          {isSignInFrom
            ? "New to Netflix? Sign up now."
            : "Already registered? Go to Sign In."}
        </p>
      </form>
    </div>
  );
};

export default Login;
