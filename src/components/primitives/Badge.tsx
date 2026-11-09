import { View, StyleSheet } from 'react-native';
import { Text } from './Text';
import { colors } from '../../theme';

interface BadgeProps {
  label: string;
  variant?: 'default' | 'success' | 'warning' | 'error';
}

export function Badge({ label, variant = 'default' }: BadgeProps) {
  return (
    <View style={[styles.base, styles[variant]]}>
      <Text size="sm" weight="bold" color={colors.ink}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },
  default: {
    backgroundColor: colors.purpleSoft,
  },
  success: {
    backgroundColor: colors.mint,
  },
  warning: {
    backgroundColor: colors.pegi,
  },
  error: {
    backgroundColor: '#fee2e2',
  },
});
