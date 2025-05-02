import { useState } from "react";
import connectBleuLogo from "./assets/internet.png";
import phoneIcon from "./assets/phone.svg";
import mailIcon from "./assets/mail.svg";
import checkIcon from "./assets/check.svg";

import "./App.css";

function App() {
  const [userInput, setUserInput] = useState("Enter Phone Number");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleFocus = () => {
    setUserInput("");
    setIsSubscribed(false);
  };

  const handleBlur = () => {
    setUserInput("Enter Phone Number");
    setIsSubscribed(false);
  };

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleClick = () => {
    setIsSubscribed((prevState) => !prevState);
  };

  const SuccessMessage = () => {
    return (
      <div>
        <p>
          You are now subscribed to Assistext!
          <img className="subscribed-icon" src={checkIcon} />
        </p>
      </div>
    );
  };

  return (
    <>
      <div>
        <a href="https://connectbleu.com" target="_blank">
          <img src={connectBleuLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>ConnectBleu</h1>

      <div className="card">
        <div>
          {isSubscribed ? (
            <SuccessMessage />
          ) : (
            <p>Enter your phone number to subscribe</p>
          )}
        </div>

        <div>
          <img class="phone-icon" src={phoneIcon} />
          <input
            type="text"
            onInput={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={userInput}
            className={isSubscribed ? "input-success" : ""}
          />
        </div>
        <button onClick={handleClick} className="subscribe-button">
          Subscribe
        </button>

        <p className="terms">
          By providing your phone number, you agree to have SMS conversations
          with Assistext from ConnectBleu. Message frequency may vary. Standard
          Message and Data Rates may apply. Reply STOP to opt out. Reply HELP
          for help. We will not share mobile information with third parties for
          promotional or marketing purposes.
        </p>
      </div>
      <p>
        <div className="contact-info">
          <img className="contact-icon" src={mailIcon} />
          <a href="mailto:matt@connectbleu.com" className="email">
            matt@connectbleu.com
          </a>
        </div>
      </p>
    </>
  );
}

export default App;
