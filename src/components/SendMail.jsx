import { Button, IconButton } from "@mui/material";
import React from "react";
import "../css/SendMail.css";
import CloseIcon from "@mui/icons-material/Close";
import MinimizeIcon from "@mui/icons-material/Minimize";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";
import { db } from "../features/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { openErrorMessage } from "../features/errorSlice";

const SendMail = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) => {
    console.log(formData);
    // console.log(errors);
    console.log(serverTimestamp());
    const email = {
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: serverTimestamp(),
    };
    addDoc(collection(db, "email"), email);
    dispatch(closeSendMessage());
  };
  const ErrorPop = () => {
    if (errors.to || errors.subject || errors.message) {
      dispatch(openErrorMessage());
    }
  };

  return (
    <div className="sendmail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <div className="sendMail__header--right">
          <IconButton>
            <MinimizeIcon />
          </IconButton>
          <IconButton>
            <CloseFullscreenIcon />
          </IconButton>
          <IconButton onClick={() => dispatch(closeSendMessage())}>
            <CloseIcon />
          </IconButton>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form__input--fields">
          <input
            name="to"
            type="email"
            placeholder="Receiver"
            {...register("to", { required: true })}
          />
          {/* {errors.to && <ErrorPopUp state={true} />} */}
          <input
            name="subject"
            type="text"
            placeholder="Subject"
            {...register("subject", { required: true })}
          />
          <textarea
            name="message"
            type="text"
            className="mail__field"
            {...register("message", { required: true })}
          />
        </div>

        <div className="sendMail__options">
          <Button
            type="submit"
            className="sendMail__send"
            onClick={() => ErrorPop()}
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
