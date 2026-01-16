import { MovieData } from '../types/MovieData';
import { Movie } from '../types/Movie';

export const normalizeMovie = (movie: MovieData): Movie => {
  return {
    imdbId: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    description: movie.Plot || 'No description available',
    poster:
      movie.Poster && movie.Poster !== 'N/A'
        ? movie.Poster
        : 'https://via.placeholder.com/360x270.png?text=no%20preview',
    imgUrl:
      movie.Poster && movie.Poster !== 'N/A'
        ? movie.Poster
        : 'https://via.placeholder.com/360x270.png?text=no%20preview',
    imdbUrl: `https://www.imdb.com/title/${movie.imdbID}`,
  };
};
