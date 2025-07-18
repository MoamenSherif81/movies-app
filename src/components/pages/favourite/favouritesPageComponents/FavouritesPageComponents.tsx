"use client"

import { Fragment } from "react"

import MoviesGrid from "@/components/common/moviesGrid/MoviesGrid"
import { useFavourites } from "@/stores/favourites"

import NoFavouritesMessage from "../noFavouritesMessage/NoFavouritesMessage"
import styles from "./FavouritesPageComponents.module.scss"

export default function FavouritesPageComponents() {
  const { favourites } = useFavourites((state) => state)
  return (
    <section
      className={`${styles.favourites}`}
      aria-label="Favorite movies section"
    >
      {favourites.length === 0 ? (
        <NoFavouritesMessage />
      ) : (
        <Fragment>
          <h3 className={`section_title`}>Your Favourite Movies</h3>
          <MoviesGrid
            movies={favourites}
            aria-live="polite"
            aria-relevant="additions removals"
          />
        </Fragment>
      )}
    </section>
  )
}
