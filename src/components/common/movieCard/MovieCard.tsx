import Link from "next/link" // Import Link

import type { IMovie } from "@/types/types"
import { starIcon } from "@/utils/icons"

import FavouriteButton from "../favouriteButton/FavouriteButton"
import ImageOptimized from "../imageOptimized/ImageOptimized"
import styles from "./MovieCard.module.scss"

interface IMovieCardProps {
  movie: IMovie
}

export default function MovieCard({ movie }: IMovieCardProps) {
  return (
    <Link
      href={`/movies/${movie.id}`}
      className={styles.card}
      aria-label={`View details for ${movie.name} (${movie?.premiered})`}
    >
      <div className={styles.card__poster}>
        <ImageOptimized
          src={movie.image?.original}
          alt={`Poster for ${movie.name}`}
        />
        {movie?.rating?.average && (
          <div
            className={styles.card__rating}
            aria-label={`Rating: ${movie?.rating?.average} out of 10`}
          >
            <span className={styles.card__rating__icon} aria-hidden="true">
              {starIcon}
            </span>
            <span className={styles.card__rating__text}>
              {movie?.rating?.average}
            </span>
          </div>
        )}
      </div>
      <FavouriteButton className={styles.card__favourite} movie={movie} />
      <div className={styles.card__info}>
        <h5 className={styles.card__info__title}>{movie.name}</h5>
        <p className={styles.card__info__date}>
          {new Date(movie.premiered).getFullYear()}
        </p>
      </div>
    </Link>
  )
}
