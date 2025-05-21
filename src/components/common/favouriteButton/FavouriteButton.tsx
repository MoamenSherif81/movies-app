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

  function handleToggleFavourite(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
    e.preventDefault();
    if (isFavourite) removeFavourite(movie);
    else addFavourite(movie);
  }

  return (
    <div
      className={`${styles.favourite} ${isFavourite ? styles["favourite--active"] : ""} ${className || ""}`}
      onClick={handleToggleFavourite}
    >
      {isFavourite ? filledFavouriteIcon : favouriteIcon}
    </div>
  );
}
