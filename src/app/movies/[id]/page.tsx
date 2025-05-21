import React from "react"

import MovieDetailsPageComponents from "@/components/pages/movieDetails/movieDetailsPageComponents/MovieDetailsPageComponents"
import { getRequest } from "@/config/APIConfig"

interface IPageProps {
  params: { id: string }
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
