import ImageOptimized from "@/components/common/imageOptimized/ImageOptimized"
import type { ICastMember } from "@/types/types"

import styles from "./MovieCast.module.scss"

interface IMovieCastProps {
  data: ICastMember[]
}

export default function MovieCast({ data }: IMovieCastProps) {
  return (
    <section className={styles.cast} aria-labelledby="cast-heading">
      <h3 className="section_title" id="cast-heading">
        Cast
      </h3>
      <ul className={styles.cast__list} aria-label="List of cast members">
        {data.map((castMember) => (
          <li
            key={`${castMember.person.id}-${castMember.character.id}`} // Have to put both ids as the person can be repeated with different characters
            className={styles.cast__list__item}
          >
            <div className={styles.cast__list__item__image}>
              <ImageOptimized
                src={castMember.person.image?.medium}
                alt={`${castMember.person.name} headshot`}
              />
            </div>
            <div className={styles.cast__list__item__info}>
              <h5 className={styles.cast__list__item__name}>
                {castMember.person.name}
              </h5>
              <p className={styles.cast__list__item__character}>
                {castMember.character.name}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
