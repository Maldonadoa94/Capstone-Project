import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fetchWeather from '../services/weatherApi';
import '../styles/Home.css';

function Home({ setSearchHistory, searchHistory }) {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);  // Loading state
  const navigate = useNavigate();

  const handleSearch = async (event) => {
    event.preventDefault();
    if (!query.trim()) {
      setError('Please enter a city name.');
      return;
    }
    
    setError('');
    setIsLoading(true);  // Start loading

    console.log('Searching for city:', query.trim());

    try {
      const data = await fetchWeather(query);
      if (!data || !data.current) {
        setError('City not found. Please try again.');
        setIsLoading(false);
        return;
      }

      setSearchHistory((prevHistory) => {
        const updatedHistory = [...prevHistory];
        const cityName = query.trim();

        if (!updatedHistory.includes(cityName)) {
          updatedHistory.push(cityName);
        }

        return updatedHistory;
      });

      
      navigate(`/weather/${query.trim()}`);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again later.');
    } finally {
      setIsLoading(false);  // Stop loading
    }
  };

  return (
    <div>
      <h1>Welcome to the Weather App!</h1>
      <form onSubmit={handleSearch}>
        <div>
          <label htmlFor="city-input">Enter city name:</label>
          <input
            id="city-input"
            type="text"
            placeholder="e.g. New York"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-describedby="city-help-text"
          />
        </div>
        <button type="submit" disabled={isLoading}>Search</button>
      </form>
      {isLoading && <div className="spinner"></div>}  {/* Show loading state */}
      {error && <div className="error">{error}</div>}  {/* Display error if exists */}
    </div>
  );
}

export default Home;




