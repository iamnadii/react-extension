import React from "react";

import { MdVerified } from "react-icons/md";
import { useEffect, useState } from "react";

import copyIcon from "../assets/images/copy-icon.png";

// Getting props
const SocialInfo = ({ logo, username }) => {
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
    <div className="inner-content">
      <img src={logo} alt="facebook" />

      <p
        // Updating state on Click
        onClick={() => {
          setIsCopied(true);
          setShowCopyIcon(false);
          navigator.clipboard.writeText(username);
        }}
      >
        {username}
      </p>
      {/* Showing copy icon when click on content */}
      {showCopyIcon && <img src={copyIcon} alt="" id="copy-icon" />}
      {/* Switching classes according to click and applying transition */}
      <span className={`copy-status ${isCopied ? "show" : ""}`}>
        <MdVerified />
        <span>Copied</span>
      </span>
    </div>
  );
};

export default SocialInfo;
