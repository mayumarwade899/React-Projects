import React, { useState } from "react";

function ToggleSwitch() {
const[isToggled, setIsToggled] = useState(false)
const handleChange = ()=> {
    setIsToggled(!isToggled);
}

  return (
    <div className="counter">
        <label>
            <input type="checkbox" onChange={handleChange}/>
        </label>
        <p>{isToggled ? "On" : "Off"}</p>
    </div>
  );
}

export default ToggleSwitch;
