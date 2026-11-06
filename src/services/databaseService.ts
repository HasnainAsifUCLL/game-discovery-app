import { supabase } from './supabaseClient';

export async function checkDatabase(): Promise<boolean> {
  if (supabase === undefined) {
    return false;
  }
  const { error } = await supabase.from('games').select('id').limit(1);
  return !error;
}