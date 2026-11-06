import { View, StyleSheet } from 'react-native';
import { Card } from './primitives/Card';
import { Text } from './primitives/Text';
import { Game } from '../types/game';

interface GameCardProps {
  game: Game;
  onPress?: () => void;
}

export function GameCard({ game, onPress }: GameCardProps) {
  return (
    <Card onPress={onPress}>
      <View style={styles.card}>
        <Text size="xl" weight="bold">
          {game.title}
        </Text>
        <Text size="sm" color="#6B7280">
          {game.genres.join(' · ')}
        </Text>
        <Text>{game.description}</Text>
        <Text size="sm" color="#6B7280">
          PEGI {game.pegi} · approx. {game.playtimeHours} hours
        </Text>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    gap: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
});