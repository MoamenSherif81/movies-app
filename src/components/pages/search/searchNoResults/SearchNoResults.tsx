import styles from "./SearchNoResults.module.scss";

interface ISearchNoResultsProps {
  title: string;
  description: string;
}

export default function SearchNoResults({
  title,
  description,
}: ISearchNoResultsProps) {
  return (
    <div className={`${styles.message}`}>
      <h4 className={`${styles.message__title}`}>
        {title}
      </h4>
      <p className={`${styles.message__description}`}>
        {description}
      </p>
    </div>
  );
}
