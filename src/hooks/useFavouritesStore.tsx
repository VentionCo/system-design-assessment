import { create } from "zustand";


interface FavouritesStore {
    favourites: Map<string, boolean>;
    setFavourites: (favourite: string) => void;
}

export const useFavouritesStore = create<FavouritesStore>(
    (set) => ({
        favourites: new Map(),
        setFavourites: (favourite: string): void => set((state) => {
            if (state.favourites.get(favourite) === false || state.favourites.get(favourite) === undefined) {
                state.favourites.set(favourite, true);
            } else {
                state.favourites.set(favourite, false);
            }
            return { ...state };
        })
    })
);