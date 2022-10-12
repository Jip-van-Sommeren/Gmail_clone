import React, { useState } from "react";
import "../css/Mail.css";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Avatar, Button, IconButton } from "@mui/material";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import DriveFileMoveOutlinedIcon from "@mui/icons-material/DriveFileMoveOutlined";
import LabelOutlinedIcon from "@mui/icons-material/LabelOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ArrowDropDown } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import ReplyIcon from "@mui/icons-material/Reply";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import { useSelector } from "react-redux";
import { selectOpenMail } from "../features/mailSlice";
import StarIcon from "@mui/icons-material/Star";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../features/firebase";

const Mail = () => {
  const [star, setStar] = useState(false);
  const [important, setImportant] = useState(false);
  const navigate = useNavigate();
  const selectedMail = useSelector(selectOpenMail);
  // console.log(id);
  const deleteEmail = () => {
    const { id } = selectedMail;
    const emailRef = doc(db, "email", id);
    setTimeout(() => navigate("/"), 200);
    deleteDoc(emailRef);
  };
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__tools--left">
          <IconButton onClick={() => navigate("/")}>
            <ArrowBackOutlinedIcon />
          </IconButton>
          <IconButton>
            <ArchiveOutlinedIcon />
          </IconButton>
          <IconButton>
            <ReportGmailerrorredOutlinedIcon />
          </IconButton>
          <IconButton onClick={() => deleteEmail()}>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
          <div className="mail__tools--vertLine"></div>
          <IconButton>
            <EmailOutlinedIcon />
          </IconButton>
          <IconButton>
            <AccessTimeOutlinedIcon />
          </IconButton>
          <IconButton>
            <AddTaskOutlinedIcon />
          </IconButton>
          <div className="mail__tools--vertLine"></div>
          <IconButton>
            <DriveFileMoveOutlinedIcon />
          </IconButton>
          <IconButton>
            <LabelOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="mail__tools--right">
          <IconButton>
            <p className="mail__settings--page">1-50 of 19.321</p>
          </IconButton>

          <IconButton className="mail__tool--right">
            <ChevronLeftIcon />
          </IconButton>
          <IconButton className="mail__tool--right">
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <p className="mail__setting--language">Nl</p>
          </IconButton>
          <IconButton>
            <ArrowDropDown />
          </IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__body--header-top">
          <div className="mail__body--header-top-left">
            <h2>{selectedMail?.subject}</h2>
            <IconButton
              onClick={
                !important
                  ? () => setImportant(true)
                  : () => setImportant(false)
              }
            >
              {!important ? (
                <LabelImportantIcon />
              ) : (
                <LabelImportantIcon className="btn__gold" />
              )}
            </IconButton>
            <div className="mail__header--top-btn">
              <button className="header__btn--left">Inbox</button>
              <button className="header__btn--right">
                <CloseOutlinedIcon />
              </button>
            </div>
          </div>
          <div className="mail__body--header-top-right">
            <IconButton>
              <LocalPrintshopOutlinedIcon />
            </IconButton>
            <IconButton>
              <OpenInNewOutlinedIcon />
            </IconButton>
          </div>
        </div>
        <div className="mail__body--header-bottom">
          <div className="mail__body--header-bottom--left">
            <Avatar className="mail__body--header-logo" />
            <div className="mail__body--header-bottom--left-wrapper">
              <h3>
                Name <span>{selectedMail?.title}</span>
              </h3>
              <div className="mail__body--header--tome">
                To me
                <IconButton>
                  <ArrowDropDown />
                </IconButton>
              </div>
            </div>
          </div>
          <div className="mail__body--header-bottom--right">
            <div className="mail__body--header-bottom--time">
              {selectedMail?.time}
            </div>
            <IconButton
              onClick={!star ? () => setStar(true) : () => setStar(false)}
            >
              {!star ? (
                <StarBorderOutlinedIcon />
              ) : (
                <StarIcon className="btn__gold" />
              )}
            </IconButton>
            <IconButton>
              <ReplyIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        <div className="mail__body--message">{selectedMail?.description}</div>
        <div className="mail__body--reply--btns">
          <Button>
            <ReplyIcon />
            Reply
          </Button>
          <Button>
            <ShortcutIcon />
            Forward
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Mail;
