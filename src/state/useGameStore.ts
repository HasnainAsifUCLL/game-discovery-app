import { create } from 'zustand';
import type { Game } from '../types/game';

interface GameState {
  likedGames: Game[];
  likeGame: (game: Game) => void;
}

export const useGameStore = create<GameState>((set) => ({
  likedGames: [],
  likeGame: (game) =>
    set((state) =>
      state.likedGames.some((liked) => liked.id === game.id)
        ? state
        : { likedGames: [...state.likedGames, game] },
    ),
}));
