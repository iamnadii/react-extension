import React from "react";

import { MdVerified } from "react-icons/md";
import { useEffect, useState } from "react";

import copyIcon from "../assets/images/copy-icon.png";

import modalEmailLogo from "../assets/images/modal-email-logo.png";

// Getting props
const ModalContent = ({ data }) => {
  // State to show copied status
  const [isCopied, setIsCopied] = useState(false);
  // State to show copied status
  const [showCopyIcon, setShowCopyIcon] = useState(true);
  // Using hook for timeout the copy status showing
  useEffect(() => {
    const copyTime = setTimeout(() => {
      setIsCopied(false);
      setShowCopyIcon(true);
    }, 2000);
    return () => clearTimeout(copyTime);
  }, [isCopied]);
  return (
    <div>
      <div className="content">
        <img src={modalEmailLogo} alt="" />
        <h6
          // Updating state on Click
          onClick={() => {
            setIsCopied(true);
            setShowCopyIcon(false);
            navigator.clipboard.writeText(data);
          }}
        >
          {data}
        </h6>
        {/* Showing copy icon when click on content */}
        {showCopyIcon && <img src={copyIcon} alt="" id="copy-icon" />}
        {/* Switching classes according to click and applying transition */}
        <span
          id="modal-copy"
          className={`copy-status ${isCopied ? "show" : ""}`}
        >
          <MdVerified />
          <span>Copied</span>
        </span>
      </div>
    </div>
  );
};

export default ModalContent;
