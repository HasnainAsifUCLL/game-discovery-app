import { StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';
import { TabIcon } from '../../src/components/TabIcon';
import { colors } from '../../src/theme';

// Floating dock: a rounded tab bar that floats a little above the bottom edge.
const dockBottom = 12;

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
        tabBarStyle: styles.dock,
        tabBarItemStyle: styles.item,
        tabBarLabelStyle: styles.label,
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

const styles = StyleSheet.create({
  dock: {
    marginHorizontal: 16,
    marginBottom: dockBottom,
    height: 68,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 28,
    borderTopWidth: 0,
    borderWidth: 1,
    borderColor: colors.line,
    backgroundColor: colors.surface,
    shadowColor: '#3c2b58',
    shadowOpacity: 0.15,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 8,
  },
  item: { borderRadius: 20 },
  label: { fontSize: 11, fontWeight: '700' },
});
