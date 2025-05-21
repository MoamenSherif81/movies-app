import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query"

import SearchPageComponents from "@/components/pages/search/searchPageComponents/SearchPageComponents"
import { getRequest } from "@/lib/APIConfig"

interface IPageProps {
  searchParams: Promise<{ q: string }>
}

export default async function Page({ searchParams }: IPageProps) {
  const queryClient = new QueryClient()

  const { q: searchQuery } = await searchParams

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
