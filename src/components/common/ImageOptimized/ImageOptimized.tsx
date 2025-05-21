import Image from "next/image"
import React from "react"

interface IImageOptimizedProps {
  src: string
  alt: string
  priority?: boolean
  sizes?: string
  className?: string
}

export default function ImageOptimized({
  src,
  alt,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  className,
}: IImageOptimizedProps) {
  return (
    <Image
      src={src || "/placeholder.jpg"}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      placeholder="blur"
      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxYjFjNDYiLz48L3N2Zz4="
      className={className}
    />
  )
}
