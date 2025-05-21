import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query"

import SearchPageComponents from "@/components/pages/search/searchPageComponents/SearchPageComponents"
import { getRequest } from "@/lib/APIConfig"

export default async function Page({
  searchParams,
}: {
  searchParams: { q?: string }
}) {
  const queryClient = new QueryClient()

  const params = await searchParams
  const searchQuery = params.q || ""

  if (searchQuery) {
    await queryClient.prefetchQuery({
      queryKey: ["search", searchQuery],
      queryFn: async () =>
        await getRequest(`/search/shows`, { q: searchQuery }),
    })
  }

  const hydratedState = dehydrate(queryClient)

  return (
    <HydrationBoundary state={hydratedState}>
      <div className="container">
        <SearchPageComponents />
      </div>
    </HydrationBoundary>
  )
}
