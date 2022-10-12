import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../css/Section.css";
import {
  selectActive,
  setActive,
  setPrimaryActive,
  setPromotionActive,
  setSocialActive,
} from "../features/activeSlice";

const Section = ({ Icon, title, selected }) => {
  const dispatch = useDispatch();
  // const [selected, setSelected] = useState(false);

  // const active = (e) => {
  //   console.log(e.type);
  //   if (e.type === "click") {
  //     setSelected(true);
  //   } else {
  //     setSelected(false);
  //

  // const active = useSelector(selectPrimaryActive);
  // console.log(active);

  const toggleClass = () => {
    if (title === "Primary") {
      dispatch(setPrimaryActive());
      console.log(true);
    }
    if (title === "Promotions") {
      dispatch(setPromotionActive());
      console.log(true);
    }
    if (title === "Social") {
      dispatch(setSocialActive());
      console.log(true);
    }
  };
  // const active = useSelector(selectActive);
  // console.log(active);
  // !selected && setSelected(true);

  return (
    <div
      onClick={() => toggleClass()}
      className={`section ${selected && "section__selected"}`}
    >
      <Icon />
      <h4>{title}</h4>
      <div className={`${selected && "selected__line"}`}></div>
    </div>
  );
};

export default Section;
