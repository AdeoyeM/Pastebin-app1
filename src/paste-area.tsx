import { useState } from "react";
import "./App.css";

function ControlledTextArea(): JSX.Element {
  const [typedMessage, setTypedMessage] = useState("");

  return (
    <div className="inputBox">
      <div>
        <textarea
          className="inputText"
          value={typedMessage}
          onChange={(event) => {
            setTypedMessage(event.target.value);
          }}
        />
      </div>

      <div>
        <button onClick={() => console.log(typedMessage)}>Submit</button>
      </div>
    </div>
  );
}

export default ControlledTextArea;
