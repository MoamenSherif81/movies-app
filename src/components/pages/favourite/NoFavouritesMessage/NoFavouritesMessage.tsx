import Link from "next/link"

import styles from "./NoFavouritesMessage.module.scss"

export default function NoFavouritesMessage() {
  return (
    <div className={`${styles.message}`} role="status">
      <h4 className={`${styles.message__title}`}>
        You haven{"'"}t added any favorites yet
      </h4>
      <p className={`${styles.message__description}`}>
        Search for movies and click the heart icon to add them to your favorites
        list.
      </p>
      <Link
        href="/search"
        className={`${styles.message__btn}`}
        aria-label="Go to movie search page"
      >
        Search for movies
      </Link>
    </div>
  )
}
