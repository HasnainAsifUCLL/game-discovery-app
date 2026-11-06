import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { Screen } from '../../src/components/primitives/Screen';
import { Text } from '../../src/components/primitives/Text';
import { EmptyState } from '../../src/components/primitives/EmptyState';
import { GameCard } from '../../src/components/GameCard';
import { getMyGames } from '../../src/services/gameService';
import { Game } from '../../src/types/game';

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
      <Stack.Screen options={{ title: 'My Games' }} />
      <View style={styles.container}>
        <Text size="xl" weight="bold">
          My Games
        </Text>

        {games.length === 0 ? (
          <EmptyState
            title="No games yet"
            description="Like a game on Discover to save it here."
          />
        ) : (
          games.map((game) => <GameCard key={game.id} game={game} />)
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { gap: 16, padding: 16 },
});