"use client";

import { useEffect, useState } from "react";
import HomePageHero from "./homePageHero/HomePageHero";
import HomePageTrending from "./homePageTrending/HomePageTrending";

export default function HomePageComponents() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((data) => setMovies(data?.slice(0, 8))) // Get the first 8 only as the returned data have 250 movie
  }, [])

  return (
    <div>
      <HomePageHero />
      <HomePageTrending movies={movies}/>
    </div>
  );
}
