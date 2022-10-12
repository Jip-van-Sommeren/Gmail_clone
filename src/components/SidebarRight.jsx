import { IconButton } from "@mui/material";
import React from "react";
import GoogleCalendar from "../assets/Google_Calendar_icon_(2020).svg";
import "../css/SidebarRight.css";
import GoogleKeep from "../assets/Google_Keep_icon_(2020).svg";
import GoogleTask from "../assets/Google_Tasks_2021.svg";
import GoogleContact from "../assets/Google_Contacts_icon.svg";
import AddIcon from "@mui/icons-material/Add";

const SidebarRight = () => {
  return (
    <div className="sidebarright">
      <IconButton>
        <img src={GoogleCalendar} alt="" className="sidebar-right--calendar" />
      </IconButton>
      <IconButton>
        <img src={GoogleKeep} alt="" className="sidebar-right--calendar" />
      </IconButton>
      <IconButton>
        <img src={GoogleTask} alt="" className="sidebar-right--calendar" />
      </IconButton>
      <IconButton>
        <img src={GoogleContact} alt="" className="sidebar-right--calendar" />
      </IconButton>
      <div className="sidebar__divide--line"></div>
      <IconButton>
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default SidebarRight;
