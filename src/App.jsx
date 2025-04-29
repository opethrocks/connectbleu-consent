import { useState } from "react";
import connectBleuLogo from "./assets/internet.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

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
          {" "}
          <input placeholder="Enter phone number" />
        </div>
        <button onClick={() => setCount((count) => count + 1)}>Submit</button>
        <p>
          By providing your phone number, you agree to have SMS conversations
          with Assistext from ConnectBleu. Message frequency may vary. Standard
          Message and Data Rates may apply. Reply STOP to opt out. Reply HELP
          for help. We will not share mobile information with third parties for
          promotional or marketing purposes.
        </p>
      </div>
      <p className="read-the-docs">Contact: matt@connectbleu.com</p>
    </>
  );
}

export default App;
