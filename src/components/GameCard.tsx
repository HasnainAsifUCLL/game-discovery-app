import { Card } from './primitives/Card';
import { Text } from './primitives/Text';
import { Badge } from './primitives/Badge';
import { Row } from './primitives/Row';
import { Stack } from './primitives/Stack';
import { Game } from '../types/game';
import { colors } from '../theme';

interface GameCardProps {
  game: Game;
  onPress?: () => void;
}

export function GameCard({ game, onPress }: GameCardProps) {
  return (
    <Card onPress={onPress}>
      <Stack gap="md">
        <Row gap="sm" wrap>
          {game.genres.map((genre) => (
            <Badge key={genre} label={genre} />
          ))}
        </Row>
        <Text size="xl" weight="bold">
          {game.title}
        </Text>
        <Text color={colors.muted}>{game.description}</Text>
        <Row gap="sm" wrap>
          <Badge label={`PEGI ${game.pegi}`} variant="warning" />
          <Badge label={`${game.playtimeHours} hours`} variant="success" />
        </Row>
      </Stack>
    </Card>
  );
}
