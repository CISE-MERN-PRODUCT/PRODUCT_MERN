import React from "react";
import Button from "../Header/Button";
import CurrentYear from "../Header/CurrentYear";
import YearsList from "../Body/yearsList";

function PickerPanel({
  selectedYear,
  isOpen,
  increaseYear,
  decreaseYear,
  jumpForward,
  jumpBackward,
  thisYear,
  choiseYear,
  top,
  left
}) {
  if (!isOpen) {
    return null;
  }

  let style = {
    top: top + "px",
    left: left + "px"
  };

  function headerWheel(e) {
    e.preventDefault();
    const delta = e.deltaY;
    if (delta < 0) {
      increaseYear();
    } else {
      decreaseYear();
    }
  }

  function panelKey(e) {
    console.log(e.altKey);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(e.metaKey);
  }

  return (
    <div className="picker-panel popup-left" style={style} onKeyUp={panelKey}>
      <div className="header d-flex justify-content-around" onWheel={headerWheel}>
        <div>
        <Button onClick={decreaseYear} direction="backward" />
        </div>
        <CurrentYear year={selectedYear} />
        
        <div>
        <Button onClick={increaseYear} direction="forward" />
        </div>
      </div>
      <div className="body">
        <YearsList choiseYear={choiseYear} selectedYear={selectedYear} />
      </div>
      <div className="footer">
        <span className="footer-btn">
      {/*eslint-disable-next-line*/}
          <a className="footer-today" onClick={thisYear}>
            Today
          </a>
        </span>
      </div>
    </div>
  );
}

export default PickerPanel;
