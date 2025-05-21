"use client";

import { IMovie } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavouritesState {
  favourites: IMovie[];
  addFavourite: (newMovie: IMovie) => void;
  removeFavourite: (removedMovie: IMovie) => void;
}

export const useFavourites = create<FavouritesState>()(
  persist(
    (set, get) => ({
      favourites: [],
      addFavourite: (newMovie: IMovie) => {
        const { favourites } = get();
        if (!favourites.some((movie) => movie?.id == newMovie?.id)) {
          set({ favourites: [...get().favourites, newMovie] });
        }
      },
      removeFavourite: (removedMovie: IMovie) => {
        const { favourites } = get();
        set({
          favourites: favourites.filter(
            (movie) => movie?.id !== removedMovie?.id
          ),
        });
      },
    }),
    {
      name: "movie-favourites",
    }
  )
);
