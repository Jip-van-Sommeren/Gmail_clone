import React from "react";
import "../css/Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import GmailLogo from "../assets/logo_gmail_lockup_default_2x_r5.png";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppsIcon from "@mui/icons-material/Apps";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import { auth } from "../features/firebase";
import { signOut } from "firebase/auth";
import { condenseMenu } from "../features/menuSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const condensMenu = () => {
    dispatch(condenseMenu());
  };
  const logOut = () => {
    signOut(auth).then(() => {
      dispatch(logout());
    });
  };
  return (
    <div className="header">
      <div className="header__left">
        <IconButton onClick={() => condensMenu()}>
          <MenuIcon />
        </IconButton>
        <img src={GmailLogo} alt="" />
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input type="text" name="" id="" placeholder="Search mail" />
        <ArrowDropDownIcon className="header__input--caret" />
      </div>
      <div className="header__right">
        <IconButton>
          <HelpOutlineOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        {/* <AccountCircleIcon /> */}
        <Avatar onClick={logOut} src={user.photoURL} />
      </div>
    </div>
  );
};

export default Header;
