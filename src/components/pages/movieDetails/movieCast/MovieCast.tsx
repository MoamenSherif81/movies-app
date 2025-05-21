import { ICastMember } from "@/types/types";
import styles from "./MovieCast.module.scss";
import Image from "next/image";

interface IMovieCastProps {
  data: ICastMember[];
}

export default function MovieCast({ data }: IMovieCastProps) {
  return (
    <section className={styles.cast} aria-labelledby="cast-heading">
      <h3 className="section_title" id="cast-heading">Cast</h3>
      <ul className={styles.cast__list} aria-label="List of cast members">
        {data.map((castMember) => (
          <li
            key={`${castMember.person.id}-${castMember.character.id}`} // Have to put both ids as the person can be repeated with different characters
            className={styles.cast__list__item}
          >
            <div className={styles.cast__list__item__image}>
              <Image
                src={castMember.person.image?.medium || "/placeholder.jpg"}
                alt={`${castMember.person.name} headshot`}
                fill
                sizes="(max-width: 768px) 25vw, 20vw"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxYjFjNDYiLz48L3N2Zz4="
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
  );
}
