// components/MovieList.jsx
import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

// Component to display a list of movies
const MovieList = ({ movies }) => {
  // Show a message if no movies were found
  if (!movies.length) {
    return <p>No results found.</p>;
  }
  return (
    <div className="movie-list">
      {/* Map each movie to a MovieCard component */}
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;