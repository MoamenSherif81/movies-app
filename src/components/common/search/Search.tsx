"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

import Button from "../button/Button"
import styles from "./Search.module.scss"

interface ISearchProps {
  initialValue: string
  onSearch?: (query: string) => void
  isLoading?: boolean
  title: string
  description: string
}

export default function Search({
  initialValue = "",
  onSearch,
  isLoading,
  title,
  description,
}: ISearchProps) {
  const [input, setInput] = useState(initialValue)
  const router = useRouter()
  const [innerLoading, setInnerLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSearch) onSearch(input)
    else {
      router.push(`/search?q=${input}`)
      setInnerLoading(true)
    }
  }

  return (
    <section className={`${styles.hero}`} aria-labelledby="search-title">
      <h1 id="search-title" className={`${styles.hero__title}`}>
        {title}
      </h1>
      <p className={`${styles.hero__description}`}>{description}</p>
      <form
        onSubmit={handleSubmit}
        className={`${styles.search}`}
        role="search"
        aria-label="Search for movies"
      >
        <input
          className={`${styles.search__input}`}
          name="search"
          type="search"
          placeholder="Search for movies..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-autocomplete="list"
          autoComplete="off"
        />
        <Button
          isLoading={isLoading || innerLoading}
          type="submit"
          withoutBorderRadius
        >
          Search
        </Button>
      </form>
    </section>
  )
}
