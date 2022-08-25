import React from "react";

import { MdVerified } from "react-icons/md";
import { useEffect, useState } from "react";

import copyIcon from "../assets/images/copy-icon.png";

const SocialInfo = ({ logo, username }) => {
  const [isCopied, setIsCopied] = useState(false);
  useEffect(() => {
    const copyTime = setTimeout(() => {
      setIsCopied(false);
    }, 500);
    return () => clearTimeout(copyTime);
  }, [isCopied]);
  return (
    <div className="inner-content">
      <img src={logo} alt="facebook" />
      <p
        onClick={() => {
          setIsCopied(true);
          navigator.clipboard.writeText(username);
        }}
      >
        {username}
      </p>
      <img src={copyIcon} alt="" id="copy-icon" />
      {isCopied && (
        <span className="copy-status">
          <MdVerified />
          <span>Copied</span>
        </span>
      )}
    </div>
  );
};

export default SocialInfo;
