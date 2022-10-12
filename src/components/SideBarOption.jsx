import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../css/SideBarOptions.css";
import { setClickActive } from "../features/sidebarSlice";

const SideBarOption = ({ Icon, title, number, selected, bold }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const activeClick = () => {
    dispatch(
      setClickActive({
        prev: title,
      })
    );
    navigate("/");
  };
  return (
    <div
      className={`sidebar__option ${selected && "sidebar__active"}`}
      onClick={() => activeClick()}
    >
      <Icon />
      <h3 className={`${bold && "bold"}`}>{title}</h3>
      <p className={`${bold && "bold"}`}>{number}</p>
    </div>
  );
};

export default SideBarOption;
