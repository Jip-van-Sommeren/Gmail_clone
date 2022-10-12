import React from "react";
import "../css/Login.css";
import GmailIcon from "../assets/Gmail_icon_(2020).svg";
import { Button } from "@mui/material";
import { auth, provider } from "../features/firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { signInWithPopup } from "firebase/auth";
// import { setActive } from "../features/activeSlice";

const Login = () => {
  const dispatch = useDispatch();
  // dispatch(setActive({ name: "primary", state: true }));
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src={GmailIcon} alt="" />
        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
