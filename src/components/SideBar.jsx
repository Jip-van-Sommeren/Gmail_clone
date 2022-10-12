import { Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import "../css/SideBar.css";
import CreateIcon from "@mui/icons-material/Create";
import InboxIcon from "@mui/icons-material/Inbox";
import SideBarOption from "./SideBarOption";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
import LabelIcon from "@mui/icons-material/Label";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ChatIcon from "@mui/icons-material/Chat";
import ScheduleSendIcon from "@mui/icons-material/ScheduleSend";
import MailIcon from "@mui/icons-material/Mail";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useDispatch, useSelector } from "react-redux";
import { openSendMessage } from "../features/mailSlice";
import { selectCounter } from "../features/counterSlice";
import { selectCondenseMenu } from "../features/menuSlice";
import { selectSidebarPrev } from "../features/sidebarSlice";
// import { emailsLength } from "./EmailList";

const SideBar = () => {
  const [display, setDisplay] = useState(false);
  const dispatch = useDispatch();

  const { counter } = useSelector(selectCounter);

  const condense = useSelector(selectCondenseMenu);

  const { prev } = useSelector(selectSidebarPrev);
  // console.log(prev);

  if (!condense) {
    return (
      <div className="sidebar">
        <Button
          startIcon={<CreateIcon fontSize="large" />}
          className="sidebar__compose"
          onClick={() => dispatch(openSendMessage())}
        >
          Compose
        </Button>
        <SideBarOption
          Icon={InboxIcon}
          title="Inbox"
          number={counter}
          selected={prev === "Inbox" || !prev ? true : false}
          bold={true}
        />
        <SideBarOption
          Icon={StarBorderIcon}
          title="Star"
          number=""
          selected={prev === "Star" ? true : false}
          bold={false}
        />

        <SideBarOption
          Icon={AccessTimeIcon}
          title="Snoozed"
          number=""
          selected={prev === "Snoozed" ? true : false}
          bold={false}
        />
        <SideBarOption
          Icon={LabelImportantIcon}
          title="Important"
          number={""}
          selected={prev === "Important" ? true : false}
          bold={false}
        />
        <SideBarOption
          Icon={SendIcon}
          title="Sent"
          number={""}
          selected={prev === "Sent" ? true : false}
          bold={false}
        />
        <SideBarOption
          Icon={NoteOutlinedIcon}
          title="Drafts"
          number={""}
          selected={prev === "Drafts" ? true : false}
          bold={true}
        />
        <SideBarOption
          Icon={LabelIcon}
          title="Categories"
          number={""}
          selected={prev === "Categories" ? true : false}
          bold={true}
        />
        <div
          onClick={() => setDisplay(true)}
          className={`${display && "sideBar__more--display"}`}
        >
          <SideBarOption
            Icon={ExpandMoreOutlinedIcon}
            title="More"
            number={""}
            selected={false}
            bold={false}
          />
        </div>

        <div
          className={`sideBar__more--options ${
            display && "sideBar__more--options-display"
          }`}
        >
          <div
            onClick={() => setDisplay(false)}
            className="sideBar__less--display"
          >
            <SideBarOption
              Icon={ExpandLessIcon}
              title="Less"
              number={""}
              selected={false}
              bold={false}
            />
          </div>

          <SideBarOption
            Icon={ChatIcon}
            title="Chat"
            number={""}
            selected={prev === "Chat" ? true : false}
            bold={false}
          />
          <SideBarOption
            Icon={ScheduleSendIcon}
            title="Planned"
            number={""}
            selected={prev === "Planned" ? true : false}
            bold={false}
          />
          <SideBarOption
            Icon={MailIcon}
            title="All Mail"
            number={""}
            selected={prev === "All Mail" ? true : false}
            bold={false}
          />
          <SideBarOption
            Icon={ReportGmailerrorredOutlinedIcon}
            title="Spam"
            number={""}
            selected={prev === "Spam" ? true : false}
            bold={false}
          />
          <SideBarOption
            Icon={DeleteOutlineOutlinedIcon}
            title="Bin"
            number={""}
            selected={prev === "Bin" ? true : false}
            bold={false}
          />
          <SideBarOption
            Icon={SettingsIcon}
            title="Manage Labels"
            number={""}
            selected={prev === "Manage Labels" ? true : false}
            bold={false}
          />
          <SideBarOption
            Icon={AddIcon}
            title="Add Labels"
            number={""}
            selected={prev === "Add Labels" ? true : false}
            bold={false}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="sidebar__condensed">
        <IconButton
          className="sidebar__compose--condensed"
          onClick={() => dispatch(openSendMessage())}
        >
          <CreateIcon />
        </IconButton>
        <IconButton>
          <InboxIcon />
        </IconButton>

        <IconButton>
          <StarBorderIcon />
        </IconButton>

        <IconButton>
          <AccessTimeIcon />
        </IconButton>
        <IconButton>
          <LabelImportantIcon />
        </IconButton>
        <IconButton>
          <SendIcon />
        </IconButton>
        <IconButton>
          <NoteOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelIcon />
        </IconButton>

        <div
          onClick={() => setDisplay(true)}
          className={`${display && "sideBar__more--display"}`}
        >
          <IconButton>
            <ExpandMoreOutlinedIcon />
          </IconButton>
        </div>

        <div
          className={`sideBar__more--options ${
            display && "sideBar__more--options-display"
          }`}
        >
          <div
            onClick={() => setDisplay(false)}
            className="sideBar__less--display"
          >
            <IconButton>
              <ExpandLessIcon />
            </IconButton>
          </div>

          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <ScheduleSendIcon />
          </IconButton>
          <IconButton>
            <MailIcon />
          </IconButton>
          <IconButton>
            <ReportGmailerrorredOutlinedIcon />
          </IconButton>
          <IconButton>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <IconButton>
            <AddIcon />
          </IconButton>
        </div>
      </div>
    );
  }
};

export default SideBar;
