"use client";

import { useState } from "react";
import styles from "./Search.module.scss";
import { useRouter } from "next/navigation";

interface ISearchProps {
  initialValue: string;
  onSearch?: (query: string) => void;
  isLoading?: boolean;
  title: string;
  description: string;
}

const searchVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Search({
  initialValue = "",
  onSearch,
  isLoading,
  title,
  description,
}: ISearchProps) {
  const [input, setInput] = useState(initialValue);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) onSearch(input);
    else router.push(`/search?q=${input}`);
  };

  return (
    <section className={`${styles.hero}`}>
      <h1 className={`${styles.hero__title}`}>{title}</h1>
      <p className={`${styles.hero__description}`}>{description}</p>
      <form onSubmit={handleSubmit} className={`${styles.search}`}>
        <input
          className={`${styles.search__input}`}
          name="search"
          placeholder="Search for movies..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className={`${styles.search__btn}`}
          type="submit"
          disabled={isLoading}
        >
          Search
        </button>
      </form>
    </section>
  );
}
