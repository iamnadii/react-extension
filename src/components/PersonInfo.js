import React from "react";

import { MdVerified } from "react-icons/md";
import { useEffect, useState } from "react";

import copyIcon from "../assets/images/copy-icon.png";

const PersonInfo = ({ logo, data, modal }) => {
  const [isCopied, setIsCopied] = useState(false);
  useEffect(() => {
    const copyTime = setTimeout(() => {
      setIsCopied(false);
    }, 500);
    return () => clearTimeout(copyTime);
  }, [isCopied]);
  return (
    <div className="inner-content">
      <img src={logo} alt="logo" />
      <p
        onClick={() => {
          setIsCopied(true);
          navigator.clipboard.writeText(data);
        }}
      >
        {typeof data === "number" ? "+" + data : data}
      </p>
      <img src={copyIcon} alt="" id="copy-icon" />
      {isCopied && (
        <span className="copy-status">
          <MdVerified />
          <span>Copied</span>
        </span>
      )}
      <span className="see-all-link" onClick={modal}>
        {typeof data !== "number" ? "See all" : ""}
      </span>
    </div>
  );
};

export default PersonInfo;
