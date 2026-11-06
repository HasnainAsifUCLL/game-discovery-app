import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { Screen } from '../../src/components/primitives/Screen';
import { Text } from '../../src/components/primitives/Text';
import { EmptyState } from '../../src/components/primitives/EmptyState';
import { StyledButton } from '../../src/components/StyledButton';
import { GameCard } from '../../src/components/GameCard';
import { getDiscoverGames } from '../../src/services/gameService';
import { Game } from '../../src/types/game';
import { checkDatabase } from '../../src/services/databaseService';

export default function DiscoverScreen() {
  const router = useRouter();
  const [games, setGames] = useState<Game[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [dbStatus, setDbStatus] = useState<'checking' | 'online' | 'offline'>('checking');

  useEffect(() => {
    async function load() {
      const result = await getDiscoverGames();
      setGames(result);
    }
    load();
  }, []);

  useEffect(() => {
    async function check() {
      const ok = await checkDatabase();
      setDbStatus(ok ? 'online' : 'offline');
    }
    check();
  }, []);

  const game = games[index];
  function nextGame() {
    setIndex(index + 1);
  }

  return (
    <Screen padding="lg">
    <Stack.Screen options={{ title: 'Discover' }} />
      <View style={styles.container}>
        <Text size="xl" weight="bold">
          Discover
        </Text>
        <Text size="sm" color="#6B7280">
          Database: {dbStatus}
        </Text>

        {game === undefined ? (
          <EmptyState
            title="No more games"
            description="Come back later for new recommendations."
          />
        ) : (
          <>
            <GameCard game={game} />
            <View style={styles.buttons}>
              <StyledButton label="Skip" variant="secondary" onPress={nextGame} />
              {/* Later: save the game to My Games */}
              <StyledButton label="Like" onPress={nextGame} />
            </View>
          </>
        )}

        <StyledButton
          label="My Games"
          variant="secondary"
          onPress={() => router.push('/my-games')}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { gap: 16, padding: 16 },
  buttons: { flexDirection: 'row', justifyContent: 'space-between', gap: 12 },
});