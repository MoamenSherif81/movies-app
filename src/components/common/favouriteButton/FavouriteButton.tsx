"use client";

import { favouriteIcon, filledFavouriteIcon } from "@/utils/icons";
import styles from "./FavouriteButton.module.scss";
import { useFavourites } from "@/stores/favourites";
import { useMemo } from "react";
import { IMovie } from "@/types/types";

interface IFavouriteButtonProps {
  movie: IMovie;
  className?: string;
}

export default function FavouriteButton({
  movie,
  className,
}: IFavouriteButtonProps) {
  const { favourites, addFavourite, removeFavourite } = useFavourites(
    (state) => state
  );

  const isFavourite = useMemo(() => {
    return favourites.some((movieEle) => movieEle?.id == movie?.id);
  }, [favourites]);

  function handleToggleFavourite(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.stopPropagation();
    e.preventDefault();
    if (isFavourite) removeFavourite(movie);
    else addFavourite(movie);
  }

  const buttonText = isFavourite
    ? `Remove ${movie.name} from favorites`
    : `Add ${movie.name} to favorites`;

  return (
    <button
      className={`${styles.favourite} ${isFavourite ? styles["favourite--active"] : ""} ${className || ""}`}
      onClick={handleToggleFavourite}
      aria-label={buttonText}
      aria-pressed={isFavourite}
      title={buttonText}
    >
      <span aria-hidden="true">
        {isFavourite ? filledFavouriteIcon : favouriteIcon}
      </span>
    </button>
  );
}
