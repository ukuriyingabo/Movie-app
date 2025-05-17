// components/MovieCard.jsx
import React from 'react';
import './MovieCard.css';

// Component to display details of a single movie
const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      {/* Use a placeholder image if the poster is not available */}
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}
        alt={movie.Title}
      />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
    </div>
  );
};

export default MovieCard;
