import React from "react";

import { MdVerified } from "react-icons/md";
import { useEffect, useState } from "react";

import copyIcon from "../assets/images/copy-icon.png";

const SocialInfo = ({ logo, username }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [showCopyIcon, setShowCopyIcon] = useState(true);
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
        onClick={() => {
          setIsCopied(true);
          setShowCopyIcon(false);
          navigator.clipboard.writeText(username);
        }}
      >
        {username}
      </p>
      {showCopyIcon && <img src={copyIcon} alt="" id="copy-icon" />}
      <span className={`copy-status ${isCopied ? "show" : ""}`}>
        <MdVerified />
        <span>Copied</span>
      </span>
    </div>
  );
};

export default SocialInfo;
