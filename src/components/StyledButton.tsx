import { Pressable, StyleSheet } from 'react-native';
import { Spinner } from './primitives/Spinner';
import { Text } from './primitives/Text';
import { colors } from '../theme';

interface StyledButtonProps {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  isLoading?: boolean;
  testID?: string;
}

export function StyledButton({
  label,
  onPress,
  variant = 'primary',
  isLoading = false,
  testID,
}: StyledButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={isLoading}
      accessibilityRole="button"
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        isLoading && styles.disabled,
        pressed && styles.pressed,
      ]}
      testID={testID}
    >
      {isLoading ? <Spinner size="small" /> : <Text weight="bold" color={variant === 'primary' ? '#FFFFFF' : colors.ink}>{label}</Text>}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: 52,
    borderRadius: 16,
    paddingHorizontal: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: { backgroundColor: colors.purple },
  secondary: { backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.line },
  disabled: { opacity: 0.6 },
  pressed: { opacity: 0.85 },
});
