
import { Game } from '../types/game';
import { supabase } from './supabaseClient';

export async function getDiscoverGames(): Promise<Game[]> {
  const { data, error } = await supabase
    .from('games')
    .select('id, title, pegi, description, playtime_hours, genres, platforms')
    .order('id', { ascending: true });

  if (error) {
    console.error('Supabase error:', error.message);
    throw error;
  }

  return (data ?? []).map((game) => ({
    id: String(game.id),
    title: game.title,
    genres: game.genres ?? [],
    platforms: game.platforms ?? [],
    pegi: game.pegi,
    description: game.description,
    playtimeHours: game.playtime_hours,
  }));
}

export async function getMyGames(): Promise<Game[]> {
  return await getDiscoverGames();
}
