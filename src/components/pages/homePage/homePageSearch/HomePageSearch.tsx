import styles from './HomePageSearch.module.scss'

export default function HomePageSearch() {
  return (
    <div className={`${styles.search}`}>
      <input
        name="search"
        placeholder='Search for movies...'
        className={`${styles.search__input}`}
      />
      <button className={`${styles.search__btn}`}>Search</button>
    </div>
  )
}
