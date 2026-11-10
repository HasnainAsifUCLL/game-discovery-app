import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Stack as RouterStack } from 'expo-router';
import { Screen } from '../../src/components/primitives/Screen';
import { Stack } from '../../src/components/primitives/Stack';
import { Row } from '../../src/components/primitives/Row';
import { Text } from '../../src/components/primitives/Text';
import { Badge } from '../../src/components/primitives/Badge';
import { Spinner } from '../../src/components/primitives/Spinner';
import { EmptyState } from '../../src/components/primitives/EmptyState';
import { StyledButton } from '../../src/components/StyledButton';
import { GameCard } from '../../src/components/GameCard';
import { getDiscoverGames } from '../../src/services/gameService';
import { Game } from '../../src/types/game';
import { checkDatabase } from '../../src/services/databaseService';
import { useGameStore } from '../../src/state/useGameStore';
import { colors } from '../../src/theme';

export default function DiscoverScreen() {
  const [games, setGames] = useState<Game[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [dbStatus, setDbStatus] = useState<'checking' | 'online' | 'offline'>('checking');
  const [loadStatus, setLoadStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [reloadKey, setReloadKey] = useState<number>(0);
  const [notice, setNotice] = useState<string>('');
  const likeGame = useGameStore((state) => state.likeGame);
  const likedGames = useGameStore((state) => state.likedGames);

  useEffect(() => {
    async function load() {
      setLoadStatus('loading');
      try {
        const result = await getDiscoverGames();
        setGames(result);
        setLoadStatus('ready');
      } catch {
        setLoadStatus('error');
      }
    }
    load();
  }, [reloadKey]);

  useEffect(() => {
    async function check() {
      const ok = await checkDatabase();
      setDbStatus(ok ? 'online' : 'offline');
    }
    check();
  }, []);

  // Games you already liked are not shown again on Discover.
  const available = games.filter((item) => !likedGames.some((liked) => liked.id === item.id));
  const game = available[index];

  function skipGame() {
    setNotice('');
    setIndex(index + 1);
  }

  function likeCurrentGame() {
    if (game === undefined) {
      return;
    }
    // The liked game leaves the list, so the same index now points to the next game.
    likeGame(game);
    setNotice(`Added to My Games: ${game.title}`);
  }

  function startOver() {
    setNotice('');
    setIndex(0);
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
        {notice !== '' && <Badge label={notice} variant="success" />}

        {loadStatus === 'loading' ? (
          <Spinner size="large" color={colors.purple} />
        ) : loadStatus === 'error' ? (
          <EmptyState
            title="Could not load games"
            description="Check your connection and try again."
            action={<StyledButton label="Try again" onPress={() => setReloadKey(reloadKey + 1)} />}
          />
        ) : game === undefined ? (
          <EmptyState
            title="No more games"
            description={
              available.length > 0
                ? 'You skipped the rest. Start over to see them again.'
                : 'You liked every game. Check them in My Games.'
            }
            action={
              available.length > 0 ? (
                <StyledButton label="Start over" variant="secondary" onPress={startOver} />
              ) : undefined
            }
          />
        ) : (
          <>
            <GameCard game={game} />
            <Row gap="md">
              <View style={styles.flex}>
                <StyledButton label="Skip" variant="secondary" onPress={skipGame} />
              </View>
              <View style={styles.flex}>
                <StyledButton label="Like" onPress={likeCurrentGame} />
              </View>
            </Row>
          </>
        )}
      </Stack>
    </Screen>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
});
