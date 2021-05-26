import React from "react";
// import FontAwesome from "react-fontawesome";
import { GrNext } from 'react-icons/gr';
import { GrPrevious } from 'react-icons/gr';

function Button({ direction, onClick }) {
  // let icon = direction === "forward" ? "angle-right" : "angle-left";
  let buttonClass =
    direction === "forward" ? true:false;
  function handlerClick(e) {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
  }

  return (
    <button className={`nav-button  ${buttonClass}`} onClick={handlerClick}>
      {/* <FontAwesome name={icon} size="2x" /> */}
      {buttonClass ? 
      <GrNext/>:
      <GrPrevious/>
    }
    </button>
  );
}

export default Button;
