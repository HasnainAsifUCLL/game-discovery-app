import { Tabs } from 'expo-router';
import { Icon } from '../../src/components/primitives/Icon';
import { colors } from '../../src/theme';

export default function AppLayout() {
  // Uncomment when you implement Supabase authentication:
  // const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  // if (!isAuthenticated) return <Redirect href="/login" />;

  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: colors.cream },
        headerShadowVisible: false,
        headerTintColor: colors.ink,
        tabBarActiveTintColor: colors.purple,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: { backgroundColor: colors.surface, borderTopColor: colors.line },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Discover',
          tabBarIcon: ({ color, size }) => <Icon name="compass-outline" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="my-games"
        options={{
          title: 'My Games',
          tabBarIcon: ({ color, size }) => <Icon name="albums-outline" size={size} color={color} />,
        }}
      />
      <Tabs.Screen name="details/[id]" options={{ href: null }} />
    </Tabs>
  );
}
