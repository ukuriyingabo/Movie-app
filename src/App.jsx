// App.jsx
import React, { useState, useEffect } from 'react';
import MovieList from './components/movieList';

import './App.css';

const API_KEY = 'fb0a0617'; 
function App() {
  // State to manage the search input value
  const [query, setQuery] = useState('');
  // State to store the list of fetched movies
  const [movies, setMovies] = useState([]);
  // State to indicate loading status
  const [loading, setLoading] = useState(false);
  // State to capture any errors during the fetch
  const [error, setError] = useState(null);

  // Function to fetch movies from the OMDb API based on the search query
  const fetchMovies = async () => {
    if (!query) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
      const data = await response.json();
      if (data.Response === 'True') {
        setMovies(data.Search); // Set the fetched movies to state
      } else {
        setMovies([]); // Clear movies if no results found
        setError(data.Error); // Show error from API
      }
    } catch (err) {
      setError('Something went wrong!'); // Catch any unexpected errors
    } finally {
      setLoading(false); // Stop loading once the fetch is complete
    }
  };

  // Handle form submission to trigger the API call
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovies();
  };

  return (
    <div className="app">
      <h1>🎬 Movie Search App</h1>
      {/* Search form for user input */}
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional rendering for loading, error, and movie results */}
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && <MovieList movies={movies} />}
    </div>
  );
}

export default App;
