import styles from "./MovieCard.module.scss";
import Image from "next/image";
import Link from "next/link"; // Import Link
import { starIcon } from "@/utils/icons";
import { IMovie } from "@/types/types";
import FavouriteButton from "../favouriteButton/FavouriteButton";

interface IMovieCardProps {
  movie: IMovie;
}

export default function MovieCard({ movie }: IMovieCardProps) {
  return (
    <Link
      href={`/movies/${movie.id}`}
      className={styles.card}
      aria-label={`View details for ${movie.name} (${movie?.premiered})`}
    >
      <div className={styles.card__poster}>
        <Image
          src={movie.image?.original || "/placeholder.jpg"}
          alt={`Poster for ${movie.name}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxYjFjNDYiLz48L3N2Zz4="
        />
        {movie?.rating?.average && (
          <div className={styles.card__rating} aria-label={`Rating: ${movie?.rating?.average} out of 10`}>
            <span className={styles.card__rating__icon} aria-hidden="true">{starIcon}</span>
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
  );
}
