import React from "react";
import ErrorSvg from "../../../public/svg/ErrorSvg";
import ConfirmationSvg from "../../../public/svg/ConfirmationSvg";
import { useForm } from "../../context/ConfirmationPopupContext";
import "./ConfirmationPopup.css";

function ConfirmationPopup() {
  const { submittedMessage, showPopupConfirmation, showPopupError } = useForm();
  return (
    <div
      className={`contactPopup ${
        showPopupConfirmation ? "popupConfirmationAnim" : ""
      } ${showPopupError ? "popupErrorAnim" : ""} ${
        (showPopupConfirmation && showPopupError) ||
        (!showPopupConfirmation && !showPopupError)
          ? "opa0"
          : ""
      }`}
    >
      {showPopupConfirmation && <ConfirmationSvg />}
      {showPopupConfirmation && <p>{submittedMessage}</p>}
      {showPopupError && <ErrorSvg />}
      {showPopupError && <p>{submittedMessage}</p>}
    </div>
  );
}

export default ConfirmationPopup;
