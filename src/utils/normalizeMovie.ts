import { MovieData } from '../types/MovieData';
import { Movie } from '../types/Movie';

export const normalizeMovie = (movie: MovieData): Movie => {
  return {
    imdbId: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster:
      movie.Poster && movie.Poster !== 'N/A'
        ? movie.Poster
        : 'https://via.placeholder.com/300x450?text=No+Image',
    description: movie.Plot,
  };
};

