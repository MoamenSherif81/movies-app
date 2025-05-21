import moment from "moment";
import { ICastMember, IMovie } from "../../../../types/types";
import MovieDetailsOverview from "../movieDetailsOverview/MovieDetailsOverview";
import styles from "./MovieDetailsPageComponents.module.scss";
import MovieCast from "../movieCast/MovieCast";

interface IMovieDetailsPageComponentsProps {
  data: IMovie;
  castData: ICastMember[]
}

export default function MovieDetailsPageComponents({
  data,
  castData
}: IMovieDetailsPageComponentsProps) {
  return (
    <div className={styles.details} aria-labelledby="movie-title">
      <div className={styles.details__header}>
        <h2 id="movie-title">{data?.name}</h2>
      </div>
      <MovieDetailsOverview data={data} />
      {!!castData?.length && <MovieCast data={castData} />}
    </div>
  );
}
