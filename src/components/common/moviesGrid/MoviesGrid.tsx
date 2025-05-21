import { IMovie } from "@/types/types";
import styles from "./MoviesGrid.module.scss";
import MovieCard from "../movieCard/MovieCard";
import MovieCardSkeleton from "../skeletons/MovieCardSkeleton/MovieCardSkeleton";

interface IMoviesGridProps {
  movies: IMovie[];
  loading?: boolean;
}

export default function MoviesGrid({ movies, loading }: IMoviesGridProps) {
  if (loading) {
    return (
      <div
        className={`${styles.grid}`}
        aria-label="Loading search results"
        role="status"
        aria-busy="true"
      >
        {Array.from({ length: 8 }, (_, index) => (
          <MovieCardSkeleton key={`movie-${index}`} />
        ))}
      </div>
    );
  }

  return (
    <ul
      className={`${styles.grid}`}
      aria-label={`Found ${movies.length} movies`}
    >
      {movies?.map((movie) => (
        <li key={`movie-${movie.id}`}>
          <MovieCard key={`movie-${movie.id}`} movie={movie} />
        </li>
      ))}
    </ul>
  );
}
