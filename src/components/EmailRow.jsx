import { CheckBoxOutlineBlank } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import StarIcon from "@mui/icons-material/Star";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import React, { useState } from "react";
import "../css/EmailRow.css";
import DraftsIcon from "@mui/icons-material/Drafts";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import DragIndicatorOutlinedIcon from "@mui/icons-material/DragIndicatorOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "../features/mailSlice";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../features/firebase";

const EmailRow = ({ id, title, subject, description, time }) => {
  const [checkbox, setCheckbox] = useState(false);
  const [star, setStar] = useState(false);
  const [important, setImportant] = useState(false);

  const navigation = useNavigate();
  const dispatch = useDispatch();

  const deleteEmail = () => {
    const emailId = id;
    const emailRef = doc(db, "email", emailId);
    setTimeout(() => deleteDoc(emailRef), 200);
  };

  const openMail = () => {
    dispatch(selectMail({ id, title, subject, description, time }));
    navigation("/mail");
  };
  return (
    <div className="emailRow">
      <div className="emailRow__left">
        <DragIndicatorOutlinedIcon />

        <div className="emailRow__options">
          <IconButton
            onClick={
              !checkbox ? () => setCheckbox(true) : () => setCheckbox(false)
            }
          >
            {!checkbox ? <CheckBoxOutlineBlank /> : <CheckBoxIcon />}
          </IconButton>
          <IconButton
            onClick={!star ? () => setStar(true) : () => setStar(false)}
          >
            {!star ? (
              <StarBorderOutlinedIcon />
            ) : (
              <StarIcon className="btn__gold" />
            )}
          </IconButton>
          <IconButton
            onClick={
              !important ? () => setImportant(true) : () => setImportant(false)
            }
          >
            {!important ? (
              <LabelImportantIcon />
            ) : (
              <LabelImportantIcon className="btn__gold" />
            )}
          </IconButton>
        </div>
        <h3 onClick={openMail} className="emailRow__title">
          {title}
        </h3>
      </div>

      <div onClick={openMail} className="emailRow__message">
        <h4>
          <span className="emailRow__subject">{subject}</span> -
          <span className="emailRow__description">{description}</span>
        </h4>
      </div>
      <div onClick={openMail} className="emailRow__time">
        {time}
      </div>
      <div className="emailRow__hover">
        <IconButton>
          <ArchiveOutlinedIcon />
        </IconButton>
        <IconButton onClick={() => deleteEmail()}>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
        <IconButton>
          <DraftsIcon />
        </IconButton>
        <IconButton>
          <AccessTimeOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default EmailRow;
