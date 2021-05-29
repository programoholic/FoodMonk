import { Fragment } from "react";
import ReactDOM from "react-dom";
import BackDrop from "./ModalBackDrop";
import OverLay from "./ModalOverlay";

const modalContent = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
          {ReactDOM.createPortal(<BackDrop onClick={ props.onClose}/>, modalContent)}
      {ReactDOM.createPortal(
        <OverLay>{props.children} </OverLay>,
        modalContent
      )}
    </Fragment>
  );
};

export default Modal;
