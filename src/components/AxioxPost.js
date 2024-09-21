import axios from "axios";
import React, { useState } from "react";

function AxioxPost() {
  const data = { firstName: "", lastName: "" };
  const [inputData, setInputData] = useState(data);

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://jsonplaceholder.typicode.com/users", inputData)
    .then((response) => {
        console.log(response)
    })
  }

  return (
    <div>
      <label>First Name</label>
      <input
        type="text"
        name="firstName"
        value={inputData.firstName}
        onChange={handleChange}
      />
      <br />
      <label>Last Name</label>
      <input
        type="text"
        name="lastName"
        value={inputData.lastName}
        onChange={handleChange}
      />
      <br />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default AxioxPost;
