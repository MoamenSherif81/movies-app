import HomePageSearch from '../homePageSearch/HomePageSearch'
import styles from './HomePageHero.module.scss'

export default function HomePageHero() {
  return (
    <section className={`${styles.hero}`}>
      <h1 className={`${styles.hero__title}`}>Discover Your Next Favorite Movie</h1>
      <p className={`${styles.hero__description}`}>Search for movies, explore details, and save your favorites all in one place.</p>
      <HomePageSearch />
    </section>
  )
}
