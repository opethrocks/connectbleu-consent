import { useState } from "react";
import axios from "axios";
import connectBleuLogo from "./assets/internet.png";
import phoneIcon from "./assets/phone.svg";
import mailIcon from "./assets/mail.svg";
import checkIcon from "./assets/check.svg";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState("");
  const [isValidNumber, setIsValidNumber] = useState();
  const [invalidInput, setInvalidInput] = useState();

  const userInputValidation = /^\d{10}$/;

  const phoneNumberVerification = async () => {
    const userInputValidation = /^\d{10}$/;

    if (userInputValidation.test(userInput)) {
      try {
        const {
          data: {
            data: { valid_number: validNumber },
          },
        } = await axios.get(
          `https://api.telnyx.com/v2/number_lookup/+1${userInput}`,
          {
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_TELNYX_API_KEY}`,
              Accept: "application/json",
            },
            params: {
              phone_number: userInput,
            },
          }
        );
        validNumber
          ? setIsValidNumber(validNumber)
          : setInvalidInput("Please enter a valid number to subscribe");
      } catch ({ response: { data } }) {
        setInvalidInput(data.errors[0].detail);
      }
    } else {
      setInvalidInput("Please enter a valid 10 digit phone number");
      setIsValidNumber(false);
    }
  };

  const handleFocus = () => {
    setUserInput("");
    setInvalidInput();
    setIsValidNumber();
  };

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleClick = async () => {
    if (userInputValidation.test(userInput)) {
      await phoneNumberVerification();
    } else {
      setIsValidNumber(false);
      setInvalidInput("Please enter a valid 10 digit number");
    }
  };

  const SuccessMessage = () => {
    return (
      <>
        <p>
          {isValidNumber
            ? "You are now subscribed to Assistext!"
            : invalidInput
            ? "Please enter a valid 10 digit number"
            : ""}
        </p>
      </>
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
        <SuccessMessage />

        <div>
          <span className="phone-icon-container">
            {isValidNumber ? (
              <img className="subscribed-icon" src={checkIcon} />
            ) : (
              <img className="phone-icon" src={phoneIcon} />
            )}
          </span>
          <input
            type="text"
            id="phone"
            autoComplete="off"
            onInput={handleChange}
            onFocus={handleFocus}
            placeholder="Phone number"
            value={userInput}
            className={
              invalidInput
                ? "input-invalid"
                : isValidNumber
                ? "input-success"
                : ""
            }
          />
        </div>
        <button
          onClick={handleClick}
          disabled={false}
          className={
            invalidInput
              ? "button-invalid"
              : isValidNumber
              ? "button-success"
              : ""
          }
        >
          Subscribe
        </button>

        <p className="terms">
          By providing your phone number, you agree to receive SMS messages from
          Assistext, the AI assistant at ConnectBleu. Message frequency may
          vary. Standard Message and Data Rates may apply. Reply STOP to opt
          out. Reply HELP for help. We will not share mobile information with
          third parties for promotional or marketing purposes.
        </p>

        <div className="contact-info">
          <a href="mailto:matt@connectbleu.com" className="email">
            <img className="contact-icon" src={mailIcon} />
            matt@connectbleu.com
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
