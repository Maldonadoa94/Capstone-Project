import React, { useState } from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import WeatherPage from './components/WeatherPage';
import Errors from './components/Errors';
import Navbar from './components/NavBar';
import History from './components/History';
import Favorites from './components/Favorites';

function App() {
  const [searchHistory, setSearchHistory] = useState([]); //store list of history
  const [favorites, setFavorites] = useState([]); //store list of favorites

  const addFavorite = (city) => {
    if (!favorites.includes(city)) {
      setFavorites((prevFavorites) => [...prevFavorites, city]);
    }
  };
  const removeFavorite = (city) => {
    setFavorites((prevFavorites) => prevFavorites.filter(fav => fav !== city));
  };

  return (
    <Router>
      <div className="App">
        <Errors>
          <Navbar />
          <Routes>
            <Route path="/" 
            element={<Home setSearchHistory={setSearchHistory}
            searchHistory={searchHistory} />} 
            />
            <Route path="/weather/:city" 
            element={<WeatherPage
                      addFavorite={addFavorite}
                      removeFavorite={removeFavorite}
                      favorites={favorites}
                      />}
            />
            <Route
              path="/history"
              element={<History searchHistory={searchHistory} />}
            />
            <Route
              path="/favorites"
              element={<Favorites favorites={favorites} removeFavorite={removeFavorite} />}
            />
          </Routes>
        </Errors>
      </div>
    </Router>
  );
}

export default App;

