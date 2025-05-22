import Button from "@/components/common/button/Button"

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
      <Button href="/search">Search for movies</Button>
    </div>
  )
}
