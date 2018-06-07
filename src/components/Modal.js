import React from "react";
import ReactModal from "react-modal";
import { withTheme } from "emotion-theming";

const Modal = withTheme(({ theme, ...props }) => (
  <ReactModal
    style={{
      overlay: { backgroundColor: theme.colors.modalBackground },
      content: {
        left: "10%",
        right: "10%",
        bottom: "5%",
        top: "5%",
        maxWidth: "1000px",
        margin: "0 auto"
      }
    }}
    {...props}
  />
));

export default Modal;
