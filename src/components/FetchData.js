import React, { useEffect, useState } from "react";

function FetchData() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => setUserData(data));
  });

  return (
    <div>
      {userData ? (
        <div>
          <h3>ID: {userData.id}</h3>
          <h3>Title: {userData.title}</h3>
          <h3>Body: {userData.body}</h3>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default FetchData;
