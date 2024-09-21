import React, { useState } from "react";

function UserInput() {
  const [input, setInput] = useState("");

  return (
    <div className="counter">
      <input
        type="text"
        placeholder="Enter text here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <span>{input}</span>
    </div>
  );
}

export default UserInput;
