import { Platform } from 'react-native';
import { Tabs } from 'expo-router';
import { TabIcon } from '../../src/components/TabIcon';
import { colors } from '../../src/theme';

// On the web, Netlify's free plan shows a "Powered by Netlify" badge in the bottom right corner.
// Lift the tab bar so the badge does not cover the My Games tab.
const badgeOffset = Platform.OS === 'web' ? 64 : 0;

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
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.line,
          marginBottom: badgeOffset,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Discover',
          tabBarIcon: ({ color, size }) => <TabIcon name="discover" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="my-games"
        options={{
          title: 'My Games',
          tabBarIcon: ({ color, size }) => <TabIcon name="games" color={color} size={size} />,
        }}
      />
      <Tabs.Screen name="details/[id]" options={{ href: null }} />
    </Tabs>
  );
}
