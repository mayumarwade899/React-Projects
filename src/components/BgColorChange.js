import React, { useState } from "react";

function BgColorChange() {
  const [backgroundColor, setBackgroundColor] = useState("yellow");
  const handleClick = () => {
    const newColor = backgroundColor === "yellow" ? "Blue" : "yellow";
    setBackgroundColor(newColor);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor,
        height: "400px",
        width: "400px",
        cursor: "pointer",
      }}
    >
      <h3>Click me to change color</h3>
    </div>
  );
}

export default BgColorChange;
