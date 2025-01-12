import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/History.css';


function History({ searchHistory }) {
  return (
    <div className='history-page'>
      <h1>Search History</h1>
      {searchHistory.length > 0 ? (
        <ul>
          {searchHistory.map((city, index) => (
            <li key={index}>
              <Link to={`/weather/${city}`}>{city}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your recent searches will show here!</p>
      )}
    </div>
  );
}

export default History;
