import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '@shopify/restyle';
import { Text } from 'react-native';
import { Theme } from '../theme/theme';
import { HomeScreen } from '../screens/HomeScreen';
import { ExerciseScreen } from '../screens/ExerciseScreen';
import { LibraryScreen } from '../screens/LibraryScreen';
import { StatsScreen } from '../screens/StatsScreen';
import { LearnScreen } from '../screens/LearnScreen';
import { OnboardingScreen } from '../screens/OnboardingScreen';
import { RootStackParamList, TabParamList } from './types';
import { Home, List, BarChart2, BookOpen } from 'lucide-react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

function TabNavigator() {
  const theme = useTheme<Theme>();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderTopColor: theme.colors.gray300,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.gray600,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Home {...{ color }} size={size ?? 24} />
          ),
        }}
      />
      <Tab.Screen
        name="LibraryTab"
        component={LibraryScreen}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: ({ color, size }) => (
            <List {...{ color }} size={size ?? 24} />
          ),
        }}
      />
      <Tab.Screen
        name="StatsTab"
        component={StatsScreen}
        options={{
          tabBarLabel: 'Stats',
          tabBarIcon: ({ color, size }) => (
            <BarChart2 {...{ color }} size={size ?? 24} />
          ),
        }}
      />
      <Tab.Screen
        name="LearnTab"
        component={LearnScreen}
        options={{
          tabBarLabel: 'Learn',
          tabBarIcon: ({ color, size }) => (
            <BookOpen {...{ color }} size={size ?? 24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen 
        name="Exercise" 
        component={ExerciseScreen as any}
        options={({ route }) => ({
          title: route.params.exercise.title,
        })}
      />
      <Stack.Screen name="Library" component={LibraryScreen} />
      <Stack.Screen name="Stats" component={StatsScreen} />
      <Stack.Screen name="Learn" component={LearnScreen} />
    </Stack.Navigator>
  );
} 