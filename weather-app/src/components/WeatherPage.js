import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import fetchWeather from '../services/weatherApi';
import WeatherCard from './WeatherCard';

function WeatherPage({ addFavorite, removeFavorite, favorites }) {
  const { city } = useParams();
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const isFavorite = favorites.includes(city);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const data = await fetchWeather(city);
        setWeatherData(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch weather data.');
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [city]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="weather-page">
      <h1>Weather in {city}</h1>
      <WeatherCard
        weatherData={weatherData}
        addFavorite={addFavorite}
        removeFavorite={removeFavorite}
        isFavorite={isFavorite}
      />
    </div>
  );
}

export default WeatherPage;





