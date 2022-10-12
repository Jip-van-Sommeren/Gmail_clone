import {
  ArrowDropDown,
  CheckBox,
  CheckBoxOutlineBlank,
} from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import "../css/EmailList.css";
import RefreshIcon from "@mui/icons-material/Refresh";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { IconButton } from "@mui/material";
import Section from "./Section";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import EmailRow from "./EmailRow";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../features/firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPrimaryActive,
  selectPromotionActive,
  selectSocialActive,
} from "../features/activeSlice";
import { length } from "../features/counterSlice";

const EmailList = () => {
  const dispatch = useDispatch();
  const [checkbox, setCheckbox] = useState(false);
  const [emails, setEmails] = useState([]);

  const primActive = useSelector(selectPrimaryActive);
  const promActive = useSelector(selectPromotionActive);
  const socialActive = useSelector(selectSocialActive);

  // console.log(primActive);
  // console.log(promActive);
  // console.log(socialActive);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "email"), (doc) => {
      const emails = doc.docs.map((elem) => ({ ...elem.data(), id: elem.id }));
      // emails.sort();
      const sortTimestamp = emails.sort((a, b) => {
        return b.timestamp - a.timestamp;
      });
      setEmails(emails);
      const number = emails.length;
      // console.log(number);
      dispatch(length({ counter: number }));
    });
  }, []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settings--left">
          <IconButton
            onClick={
              !checkbox ? () => setCheckbox(true) : () => setCheckbox(false)
            }
          >
            {!checkbox ? <CheckBoxOutlineBlank /> : <CheckBox />}
          </IconButton>
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settings--right">
          <IconButton className="emailList__settings--page-btn">
            <p className="emailList__settings--page">1-50 of 19.321</p>
          </IconButton>

          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton className="emailList__setting--language-btn">
            <p className="emailList__setting--language">Nl</p>
          </IconButton>
          <IconButton className="emailList__settting--dropdown">
            <ArrowDropDown />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="Primary" selected={primActive} />
        <Section
          Icon={LocalOfferOutlinedIcon}
          title="Promotions"
          selected={promActive}
          // onClick={setPrimary(true)}
        />
        <Section
          Icon={PeopleOutlineIcon}
          title="Social"
          selected={socialActive}
        />
      </div>
      <div className="emailList__list">
        {emails.map((email) => (
          <EmailRow
            title={email.to}
            subject={email.subject}
            description={email.message}
            time={new Date(email.timestamp?.seconds * 1000)
              .toTimeString()
              .slice(0, 5)}
            key={email.id}
            id={email.id}
          />
        ))}
      </div>
    </div>
  );
};

export default EmailList;
