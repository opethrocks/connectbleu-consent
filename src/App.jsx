import { useState } from "react";
import connectBleuLogo from "./assets/internet.png";
import "./App.css";

function App() {
  const [input, setInput] = useState("Enter Phone Number");
  const [subscribed, setSubscribed] = useState(false);

  const handleFocus = () => {
    setInput("");
    setSubscribed(false);
  };

  const handleBlur = () => {
    setInput("Enter Phone Number");
    setSubscribed(false);
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    setSubscribed(true);
  };

  const SuccessMessage = () => {
    <p className="subscribed">You are now subscribed to Assistext!</p>;
  };

  return (
    <>
      <div>
        <a href="https://connectbleu.com" target="_blank">
          <img src={connectBleuLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>ConnectBleu</h1>
      {subscribed ? <SuccessMessage /> : <p></p>}

      <div className="card">
        <div>
          <input
            type="text"
            onInput={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={input}
            className={subscribed ? "input-success" : ""}
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
