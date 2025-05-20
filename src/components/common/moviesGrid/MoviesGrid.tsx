import { IMovie } from "@/types/types";
import styles from "./MoviesGrid.module.scss";
import MovieCard from "../movieCard/MovieCard";

interface IMoviesGridProps {
  movies: IMovie[];
}

export default function MoviesGrid({ movies }: IMoviesGridProps) {
  return (
    <div className={`${styles.grid}`}>
      {movies?.map((movie) => (
        <MovieCard key={`movie-${movie.id}`} movie={movie} />
      ))}
    </div>
  );
}
