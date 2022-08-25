import React from "react";

import { MdVerified } from "react-icons/md";
import { useEffect, useState } from "react";

import copyIcon from "../assets/images/copy-icon.png";

const PersonInfo = ({ logo, data, modal }) => {
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
      <img src={logo} alt="logo" />
      <p
        onClick={() => {
          setIsCopied(true);
          setShowCopyIcon(false);
          navigator.clipboard.writeText(data);
        }}
      >
        {/* next line is add a + sign before numbers and not before emails */}
        {typeof data === "number" ? "+" + data : data}
      </p>
      {showCopyIcon && <img src={copyIcon} alt="" id="copy-icon" />}
      <span className={`copy-status ${isCopied ? "show" : ""}`}>
        <MdVerified />
        <span>Copied</span>
      </span>
      <span className="see-all-link" onClick={modal}>
        {typeof data !== "number" ? "See all" : ""}
      </span>
    </div>
  );
};

export default PersonInfo;
