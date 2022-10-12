import React, { useEffect } from "react";
import "./css/App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Mail from "./components/Mail";
import EmailList from "./components/EmailList";
import SendMail from "./components/SendMail";
import { useDispatch, useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { login, selectUser } from "./features/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./features/firebase";
import SidebarRight from "./components/SidebarRight";
import ErrorPopUp from "./components/ErrorPopUp";
import { selectErrorMessageIsOpen } from "./features/errorSlice";
// import { selectActive, setActive } from "./features/activeSlice";

function App() {
  const user = useSelector(selectUser);
  // console.log(user);
  const dispatch = useDispatch();
  // dispatch(setActive({ name: "primary", state: true }));
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const errorMessageIsOpen = useSelector(selectErrorMessageIsOpen);
  console.log(errorMessageIsOpen);
  // const active = useSelector(selectActive);
  // console.log(active);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      }
    });
  }, []);
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="App">
          <Header />
          <div className="app__body">
            <SideBar />
            <Routes>
              <Route path="/" element={<EmailList />} />
              <Route path="/mail" element={<Mail />} />
            </Routes>
            <SidebarRight />
          </div>
          {sendMessageIsOpen && <SendMail />}
          {errorMessageIsOpen && <ErrorPopUp />}
        </div>
      )}
    </Router>
  );
}

export default App;
