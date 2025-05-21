import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import styles from "./MovieCardSkeleton.module.scss";
import "react-loading-skeleton/dist/skeleton.css";

export default function MovieCardSkeleton() {
  return (
    <SkeletonTheme baseColor="#1b1c46" highlightColor="#1e204e">
      <div className={`${styles.card}`} aria-hidden="true" role="presentation">
        <div className={`${styles.card__poster}`}>
          <Skeleton className={`${styles.card__poster__img}`} />
        </div>
        <div className={`${styles.card__text}`}>
          <Skeleton className={`${styles.card__text__title}`} />
          <Skeleton className={`${styles.card__text__date}`} />
        </div>
      </div>
    </SkeletonTheme>
  );
}
