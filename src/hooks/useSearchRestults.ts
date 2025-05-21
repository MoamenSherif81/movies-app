import { useQuery } from "@tanstack/react-query"

import { getRequest } from "@/lib/APIConfig"

export default function useSearchRestults(currSearchInput: string) {
  return useQuery({
    queryKey: ["search", currSearchInput],
    queryFn: async () =>
      await getRequest(`/search/shows`, { q: currSearchInput }),
    enabled: !!currSearchInput,
  })
}
