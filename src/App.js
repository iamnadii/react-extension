import { useState } from "react";
import PersonInfo from "./components/PersonInfo";

// importing images
import noLogo from "./assets/images/number-logo.png";
import emailLogo from "./assets/images/email-logo.png";
import fbLogo from "./assets/images/fb-logo.png";
import twitterLogo from "./assets/images/twitter-logo.png";
import gitLogo from "./assets/images/git-logo.png";
import modalMainLogo from "./assets/images/modal-main-icon.png";
import crossIcon from "./assets/images/cross-icon.png";

import SocialInfo from "./components/SocialInfo";
import ModalContent from "./components/ModalContent";

// Passing Dynamic Data
const data = [
  { mobile: [3128017920, 5123527877] },
  {
    emails: [
      "iamneilpatterson@gmail.com",
      "neilpatterson@gmail.com",
      "thisisneilpatterson@gmail.com",
    ],
  },
  {
    businessEmails: ["walmart@gmail.com", "tesla@gmail.com", "rebok@gmail.com"],
  },
  {
    usernames: [
      {
        fb: "neilmpatterson",
        twitter: "neilmpatterson",
        git: "neilmpatterson",
      },
    ],
  },
];
function App() {
  // Setting state to control modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Function to update modal status
  function modalStatus() {
    setIsModalOpen(true);
  }
  return (
    <>
      <div className="container">
        <div className="left-content">
          {/* Rendering Personal Info Component and Passing Props */}
          <PersonInfo logo={noLogo} data={data[0].mobile[0]} />
          <PersonInfo
            logo={emailLogo}
            data={data[1].emails[1]}
            modal={modalStatus}
          />
        </div>
        <div className="right-content">
          {/* Rendering Social Info Component and Passing Props */}
          <SocialInfo logo={fbLogo} username={data[3].usernames[0].fb} />
          <SocialInfo
            logo={twitterLogo}
            username={data[3].usernames[0].twitter}
          />
          <SocialInfo logo={gitLogo} username={data[3].usernames[0].git} />
        </div>
      </div>
      {/* Conditional Renderring according to modal status */}
      {isModalOpen && (
        <div className="modal">
          <div className="main-logo">
            <div className="left">
              <img src={modalMainLogo} alt="logo" className="icon" />
              <span>Emails</span>
            </div>
            <img
              src={crossIcon}
              alt=""
              className="right"
              onClick={() => setIsModalOpen(false)}
            />
          </div>
          <div className="modal-content">
            <div className="upper">
              <p className="title">Business</p>
              {data[1].emails.map((data) => {
                return <ModalContent data={data} />;
              })}
            </div>
            <div className="upper">
              <p className="title">Persnoal</p>
              {data[2].businessEmails.map((data) => {
                return <ModalContent data={data} />;
              })}
            </div>
          </div>
        </div>
      )}
      {/* Conditional Rendering for Overlay according to modal status*/}
      {isModalOpen && (
        <div className="overlay" onClick={() => setIsModalOpen(false)}></div>
      )}
    </>
  );
}

export default App;
