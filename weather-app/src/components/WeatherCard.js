import React from 'react';
import '../styles/WeatherCard.css';

function WeatherCard({ weatherData, addFavorite, removeFavorite, isFavorite }) {
  if (!weatherData) return null;

  const { current, forecast } = weatherData;  // Extract current and forecast data

  
  const getDayForecast = () => {
    // Get forecast for the next 6 hours or less
    const forecastData = forecast.slice(0, 6).map((item) => ({
      time: new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      temp: item.main.temp,
      description: item.weather[0].description,
    }));

    return forecastData;
  };

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(current.name);
    } else {
      addFavorite(current.name);
    }
  };

  return (
    <div className="weather-card">
      <h2>{current.name}, {current.sys.country}</h2>
      <p>{current.weather[0].description}</p>
      <div className="weather-info">
        <p><strong>Temperature:</strong> {current.main.temp}°C</p>
        <p><strong>Humidity:</strong> {current.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> {current.wind.speed} m/s</p>

        {/* Forecast for the rest of the day */}
        <div className="forecast">
          <h3>Forecast for the rest of the day</h3>
          {getDayForecast().map((hour, index) => (
            <p key={index}>
              <strong>{hour.time}</strong>: {hour.temp}°C, {hour.description}
            </p>
          ))}
        </div>
      </div>
      <button onClick={handleFavoriteClick}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
}

export default WeatherCard;



