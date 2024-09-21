import React, { useEffect, useState } from "react";

function WeatherAPI() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=65119056a5f6c972a596f48d7db7338a`)
        .then((response) => response.json())
        .then((data) => setWeather(data))
      });
    }
  },[]);

  return <div className="counter">
    {weather ? (
        <div>
            <h2>Current Weather</h2>
            <p>Temperature: {weather.main.temp}</p>
            <p>Conditions: {weather.weather[0].description}</p>
        </div>
    ) : 
    <h3>
        Loading...
    </h3>
}
  </div>;
}

export default WeatherAPI;
