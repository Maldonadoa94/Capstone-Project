import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Favorites.css';

function Favorites({ favorites, removeFavorite }) {
  return (
    <div className="favorites-page">
      <h1>Your Favorite Cities</h1>
      {favorites.length === 0 ? (
        <p>Your favorites will be added here!</p>
      ) : (
        <ul>
          {favorites.map((city, index) => (
            <li key={index}>
              <Link to={`/weather/${city}`}>{city}</Link>
              <button onClick={() => removeFavorite(city)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favorites;
