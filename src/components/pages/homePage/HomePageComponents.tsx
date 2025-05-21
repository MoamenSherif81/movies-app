import Search from "@/components/common/search/Search"
import type { IMovie } from "@/types/types"

import HomePageTrending from "./homePageTrending/HomePageTrending"

export default function HomePageComponents({ data }: { data: IMovie[] }) {
  const movies = data?.slice(0, 8)

  return (
    <div aria-label="Movie discovery homepage">
      <Search
        initialValue=""
        title="Discover Your Next Favorite Movie"
        description="Search for movies, explore details, and save your favorites all in one place."
      />
      <HomePageTrending movies={movies} />
    </div>
  )
}
