import { useEffect, useState } from 'react';
import { Stack as RouterStack } from 'expo-router';
import { Screen } from '../../src/components/primitives/Screen';
import { Stack } from '../../src/components/primitives/Stack';
import { Text } from '../../src/components/primitives/Text';
import { EmptyState } from '../../src/components/primitives/EmptyState';
import { GameCard } from '../../src/components/GameCard';
import { getMyGames } from '../../src/services/gameService';
import { Game } from '../../src/types/game';
import { colors } from '../../src/theme';

export default function MyGamesScreen() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    async function load() {
      const result = await getMyGames();
      setGames(result);
    }
    load();
  }, []);

  return (
    <Screen padding="lg">
      <RouterStack.Screen options={{ title: 'My Games' }} />
      <Stack gap="md">
        <Stack>
          <Text size="sm" weight="bold" color={colors.purple}>
            YOUR COLLECTION
          </Text>
          <Text size="xl" weight="bold">
            Games for every mood.
          </Text>
        </Stack>

        {games.length === 0 ? (
          <EmptyState
            title="No games yet"
            description="Like a game on Discover to save it here."
          />
        ) : (
          games.map((game) => <GameCard key={game.id} game={game} />)
        )}
      </Stack>
    </Screen>
  );
}
