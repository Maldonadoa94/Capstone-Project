import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}weather`, {
      params: {
        q: city,
        units: 'metric', // Celsius temperature units
        appid: API_KEY,
      },
    });

    console.log("Weather Data Response: ", response.data);

    // To get hourly forecast, use the 'forecast' endpoint (Note: You may need to use latitude & longitude)
    const forecastResponse = await axios.get(`${BASE_URL}forecast`, {
      params: {
        q: city,
        units: 'metric',
        appid: API_KEY,
      },
    });

    console.log("Forecast Data Response:", response.data);

    // Combine current weather and hourly forecast data
    return {
      current: response.data,
      forecast: forecastResponse.data.list, // List of hourly forecast data
    };

  } catch (error) {
    console.error('Error fetching weather data:', error)
    throw new Error('Failed to fetch weather data. Please try again later.');
  }
};

export default fetchWeather;

  