import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Stack as RouterStack, useRouter } from 'expo-router';
import { Screen } from '../../src/components/primitives/Screen';
import { Stack } from '../../src/components/primitives/Stack';
import { Row } from '../../src/components/primitives/Row';
import { Text } from '../../src/components/primitives/Text';
import { Badge } from '../../src/components/primitives/Badge';
import { EmptyState } from '../../src/components/primitives/EmptyState';
import { StyledButton } from '../../src/components/StyledButton';
import { GameCard } from '../../src/components/GameCard';
import { getDiscoverGames } from '../../src/services/gameService';
import { Game } from '../../src/types/game';
import { checkDatabase } from '../../src/services/databaseService';
import { colors } from '../../src/theme';

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
      <RouterStack.Screen options={{ title: 'Discover' }} />
      <Stack gap="md">
        <Stack>
          <Text size="sm" weight="bold" color={colors.purple}>
            YOUR DAILY PICKS
          </Text>
          <Text size="xl" weight="bold">
            Find something fun.
          </Text>
        </Stack>
        <Badge
          label={`Database: ${dbStatus}`}
          variant={dbStatus === 'online' ? 'success' : dbStatus === 'offline' ? 'error' : 'default'}
        />

        {game === undefined ? (
          <EmptyState
            title="No more games"
            description="Come back later for new recommendations."
          />
        ) : (
          <>
            <GameCard game={game} />
            <Row gap="md">
              <View style={styles.flex}>
                <StyledButton label="Skip" variant="secondary" onPress={nextGame} />
              </View>
              {/* Later: save the game to My Games */}
              <View style={styles.flex}>
                <StyledButton label="Like" onPress={nextGame} />
              </View>
            </Row>
          </>
        )}

        <StyledButton
          label="My Games"
          variant="secondary"
          onPress={() => router.push('/my-games')}
        />
      </Stack>
    </Screen>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
});
