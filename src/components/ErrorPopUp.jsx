import { Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import { CloseOutlined } from "@mui/icons-material";
import "../css/ErrorPopUp.css";
import { useDispatch, useSelector } from "react-redux";
import {
  closeErrorMessage,
  selectErrorMessageIsOpen,
} from "../features/errorSlice";

const ErrorPopUp = () => {
  // const [error, setError] = useState(true);

  const dispatch = useDispatch();
  const errorMessageIsOpen = useSelector(selectErrorMessageIsOpen);
  // console.log(errorMessageIsOpen);
  if (errorMessageIsOpen) {
    return (
      <div className="error__pop-up">
        <div className="error__pop-up--left">
          <h3>Error</h3>
          <p>Enter valid address</p>
        </div>
        <div className="error__pop-up--right">
          <IconButton
            className="error__pop-up--right-btn"
            onClick={() => dispatch(closeErrorMessage())}
          >
            <CloseOutlined />
          </IconButton>
          <Button
            onClick={() => dispatch(closeErrorMessage())}
            className="error__pop-up--right-btn2"
          >
            Ok
          </Button>
        </div>
      </div>
    );
  }
};

export default ErrorPopUp;
