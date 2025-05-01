import { useState } from "react";
import connectBleuLogo from "./assets/internet.png";
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
    isSubscribed ? (
      <p className="subscribed">You are now subscribed to Assistext!</p>
    ) : (
      <p>Enter phone number to subscribe to Assistext.</p>
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
      <SuccessMessage />

      <div className="card">
        <div>
          <input
            type="text"
            onInput={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={userInput}
            className={isSubscribed ? "input-success" : ""}
          />
        </div>
        <button onClick={handleClick}>Subscribe</button>

        <p className={`${"terms"} ${"termsfont"}`}>
          By providing your phone number, you agree to have SMS conversations
          with Assistext from ConnectBleu. Message frequency may vary. Standard
          Message and Data Rates may apply. Reply STOP to opt out. Reply HELP
          for help. We will not share mobile information with third parties for
          promotional or marketing purposes.
        </p>
      </div>
      <p className="lato-regular">
        Contact:
        <a href="mailto:matt@connectbleu.com"> matt@connectbleu.com</a>
      </p>
    </>
  );
}

export default App;
