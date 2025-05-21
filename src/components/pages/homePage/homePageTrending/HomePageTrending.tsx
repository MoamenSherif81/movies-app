"use client";

import { IMovie } from "@/types/types";
import styles from "./HomePageTrending.module.scss";
import MovieCard from "@/components/common/movieCard/MovieCard";
import MoviesGrid from "@/components/common/moviesGrid/MoviesGrid";

interface ITrendingProps {
  movies: IMovie[];
}

export default function HomePageTrending({ movies }: ITrendingProps) {
  return (
    <section
      className={`${styles.trending}`}
      aria-labelledby="trending-movies-title"
    >
      <h3 id="trending-movies-title" className="section_title">
        Trending Movies
      </h3>
      <MoviesGrid aria-label="Collection of trending movies" movies={movies} />
    </section>
  );
}
