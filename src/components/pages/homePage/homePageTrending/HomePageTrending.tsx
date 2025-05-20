import { IMovie } from "@/types/types";
import styles from "./HomePageTrending.module.scss";
import MovieCard from "@/components/common/movieCard/MovieCard";
import MoviesGrid from "@/components/common/moviesGrid/MoviesGrid";

interface ITrendingProps {
  movies: IMovie[];
}

export default function HomePageTrending({ movies }: ITrendingProps) {
  return (
    <section className={`${styles.trending}`}>
      <h3 className={`${styles.trending__title}`}>Trending Movies</h3>
      <MoviesGrid movies={movies} />
    </section>
  );
}
