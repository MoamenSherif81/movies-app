"use client";

import useSearchRestults from "@/hooks/useSearchRestults";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";
import styles from "./SearchPageComponents.module.scss";
import MoviesGrid from "@/components/common/moviesGrid/MoviesGrid";
import Search from "@/components/common/search/Search";
import { useSearchParams } from "next/navigation";
import SearchNoResults from "../searchNoResults/SearchNoResults";

export default function SearchPageComponents() {
  const params = useSearchParams();
  const initialSearchQuery = params.get("q") || "";
  const [searchInput, setSearchInput] = useState<string>(initialSearchQuery);
  const [hasSearched, setHasSearched] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  const { data, isLoading, error } = useSearchRestults(searchInput);

  const movies = useMemo(() => {
    return data?.map((item: any) => item?.show) || [];
  }, [data]);

  const handleSearch = (query: string) => {
    setSearchInput(query);

    setHasSearched(true);

    const url = new URL(window.location.href);
    url.search = query ? `?q=${encodeURIComponent(query)}` : "";

    window.history.pushState({ path: url.toString() }, "", url.toString());
  };

  useEffect(() => {
    if (gridRef.current && hasSearched) {
      const elementPosition = gridRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 100;

      window?.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setHasSearched(false);
    }
  }, [hasSearched]);

  return (
    <div
      className={`${styles.search}`}
      role="main"
    >
      <div>
        <Search
          onSearch={handleSearch}
          initialValue={initialSearchQuery}
          isLoading={isLoading}
          title="Find Movies & TV Shows"
          description="Search our extensive database of shows by title, actor, or genre to
          discover your next binge-worthy entertainment"
        />
      </div>
      <section
        className={`${styles.search__movies}`}
        ref={gridRef}
        aria-live="polite"
        aria-busy={isLoading}
        aria-labelledby="search-results-heading"
      >
        {!searchInput ? (
          <SearchNoResults
            title="Enter a movie title to search"
            description="Use the search box above to find your favorite movies"
          />
        ) : !movies?.length && !isLoading ? (
          <SearchNoResults
            title={`No results found for "${searchInput}"`}
            description="Try a different search term or check your spelling"
          />
        ) : (
          <Fragment>
            {!isLoading && (
              <h3 className={`section_title ${styles.search__results_title}`}>
                Search Results for "{searchInput}"
              </h3>
            )}
            <MoviesGrid movies={movies} loading={isLoading} />
          </Fragment>
        )}

        {error && (
          <div
            className={styles.search__error}
            role="alert"
            aria-live="assertive"
          >
            <p>Sorry, something went wrong. Please try again later.</p>
          </div>
        )}
      </section>
    </div>
  );
}
