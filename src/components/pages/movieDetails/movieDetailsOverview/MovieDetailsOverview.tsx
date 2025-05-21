import parse from "html-react-parser"
import moment from "moment"

import ImageOptimized from "@/components/common/ImageOptimized/ImageOptimized"
import type { IMovie } from "@/types/types"
import { starIcon } from "@/utils/icons"

import styles from "./MovieDetailsOverview.module.scss"

interface IMovieDetailsOverviewProps {
  data: IMovie
}

export default function MovieDetailsOverview({
  data,
}: IMovieDetailsOverviewProps) {
  const detailsData: { title: string; value: React.ReactNode }[] = [
    !!data?.premiered && {
      title: "Premiered",
      value: moment(data?.premiered).format("MMM DD, YYYY"),
    },
    !!data?.rating?.average && {
      title: "Rating",
      value: (
        <div
          className={`${styles.overview__details__list__item__rating}`}
          aria-label={`Rating: ${data?.rating?.average} out of 10`}
        >
          <span
            className={`${styles.overview__details__list__item__rating__icon}`}
            aria-hidden="true"
          >
            {starIcon}
          </span>{" "}
          <span>{data?.rating?.average}</span>
        </div>
      ),
    },
    !!data?.language && {
      title: "Language",
      value: data?.language,
    },
    !!data?.runtime && {
      title: "Runtime",
      value: `${data?.runtime} min`,
    },
  ].filter((item) => item != false)

  return (
    <section className={`${styles.overview}`}>
      <div className={`${styles.overview__poster}`}>
        <ImageOptimized
          src={data?.image?.original}
          alt={`${data?.name} poster`}
          priority={true}
        />
      </div>
      <div className={`${styles.overview__text}`}>
        <div className={`${styles.overview__summary}`}>
          <h3 className="section_title">Summary</h3>
          <div aria-label="Movie summary">{parse(data.summary)}</div>
        </div>
        {data.genres.length > 0 && (
          <div className={`${styles.overview__genres}`}>
            <ul
              className={`${styles.overview__genres__list}`}
              aria-label="Movie genres"
            >
              {data.genres.map((genre, index) => (
                <li key={index} className={`${styles.overview__genres__item}`}>
                  {genre}
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className={`${styles.overview__details}`}>
          <h3 className="section_title">Details</h3>
          <div className={`${styles.overview__details__list}`}>
            {detailsData?.map((detail, index) => (
              <div
                key={index}
                className={`${styles.overview__details__list__item}`}
              >
                <h6
                  className={`${styles.overview__details__list__item__title}`}
                >
                  {detail.title}
                </h6>
                {typeof detail.value === "string" ? (
                  <p
                    className={`${styles.overview__details__list__item__value}`}
                  >
                    {detail.value}
                  </p>
                ) : (
                  detail.value
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
