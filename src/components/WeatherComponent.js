import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = '40a7641a002b415db7912813240210';
  const location = 'Deltona'; 

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
            `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`
          );          
        setWeatherData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [apiKey, location]);

  if (loading) return <p>Loading weather data...</p>;
  if (error) return <p>Error fetching weather data: {error.message}</p>;

  return (
    <div>
        <div className="Weather-header">
          <h2 className="SubHeading">Current Weather in the northern Orlando area, Florida</h2>
          <img src={weatherData.current.condition.icon} alt={weatherData.current.condition.text} />
        </div>
      {weatherData && (
        <div>
          <hr className="Separator" />
          <p>Temperature: {weatherData.current.temp_c} °C</p>
          <p>Condition: {weatherData.current.condition.text}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherComponent;


