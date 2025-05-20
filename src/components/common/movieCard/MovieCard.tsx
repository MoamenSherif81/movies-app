import styles from "./MovieCard.module.scss";
import Image from "next/image";
import { starIcon } from "@/utils/icons";
import { IMovie } from "@/types/types";

interface IMovieCardProps {
  movie: IMovie;
}

export default function MovieCard({ movie }: IMovieCardProps) {
  return (
    <div className={`${styles.card}`}>
      <div className={`${styles.card__poster}`}>
        <Image
          src={movie.image?.original || "/placeholder.jpg"}
          alt={movie.name}
          fill
        />
        <div className={`${styles.card__rating}`}>
          <span className={`${styles.card__rating__icon}`}>{starIcon}</span>
          <span className={`${styles.card__rating__text}`}>{movie?.rating?.average}</span>
        </div>
      </div>
      <div className={`${styles.card__info}`}>
        <h5 className={`${styles.card__info__title}`}>{movie.name}</h5>
        <p className={`${styles.card__info__date}`}>{new Date(movie.premiered).getFullYear()}</p>
      </div>
    </div>
  );
}
