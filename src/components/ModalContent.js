import React from "react";

import { MdVerified } from "react-icons/md";
import { useEffect, useState } from "react";

import copyIcon from "../assets/images/copy-icon.png";

import modalEmailLogo from "../assets/images/modal-email-logo.png";

const ModalContent = ({ data }) => {
  const [isCopied, setIsCopied] = useState(false);
  useEffect(() => {
    const copyTime = setTimeout(() => {
      setIsCopied(false);
    }, 500);
    return () => clearTimeout(copyTime);
  }, [isCopied]);
  return (
    <div>
      <div className="content">
        <img src={modalEmailLogo} alt="" />
        <h6
          onClick={() => {
            setIsCopied(true);
            navigator.clipboard.writeText(data);
          }}
        >
          {data}
        </h6>
        <img src={copyIcon} alt="" id="copy-icon" />
        {isCopied && (
          <span id="modal-copy" className="copy-status">
            <MdVerified />
            <span>Copied</span>
          </span>
        )}
      </div>
    </div>
  );
};

export default ModalContent;
