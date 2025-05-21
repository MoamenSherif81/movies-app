import MovieDetailsPageComponents from "@/components/pages/movieDetails/movieDetailsPageComponents/MovieDetailsPageComponents"
import { getRequest } from "@/lib/APIConfig"

interface IPageProps {
  params: Promise<{ id: string }>
}

export default async function page({ params }: IPageProps) {
  const { id } = await params

  const [moviewData, castData] = await Promise.all([
    getRequest(`/shows/${id}`),
    getRequest(`/shows/${id}/cast`),
  ])

  return (
    <div className="container">
      <MovieDetailsPageComponents data={moviewData} castData={castData} />
    </div>
  )
}
