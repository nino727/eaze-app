import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '../components/ui/Icon';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme';
import { RootStackParamList, MainTabParamList } from '../types/navigation';

// Screens
import { OnboardingScreen } from '../screens/OnboardingScreen';
import { LoginScreen } from '../screens/auth/LoginScreen';
import { SignUpScreen } from '../screens/auth/SignUpScreen';
import { ForgotPasswordScreen } from '../screens/auth/ForgotPasswordScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { ExerciseHistoryScreen } from '../screens/ExerciseHistoryScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { ExerciseDetailScreen } from '../screens/ExerciseDetailScreen';
import { ExerciseSessionScreen } from '../screens/ExerciseSessionScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { NotificationsScreen } from '../screens/NotificationsScreen';
import { SubscriptionScreen } from '../screens/SubscriptionScreen';
import { BuddySystemScreen } from '../screens/BuddySystemScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

const linking = {
  prefixes: ['ease-app://', 'https://ease.app'],
  config: {
    screens: {
      Home: 'home',
      Exercise: 'exercise/:id',
      ExerciseHistory: 'history',
      Profile: 'profile',
      Settings: 'settings',
      Onboarding: 'onboarding',
      Login: 'login',
      SignUp: 'signup',
      ForgotPassword: 'forgot-password',
    },
  },
};

const MainTabs = () => {
  const theme = useTheme<Theme>();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderTopColor: theme.colors.border,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ExerciseHistory"
        component={ExerciseHistoryScreen}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({ color, size }) => (
            <Icon name="timer" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="profile" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const Navigation = () => {
  const theme = useTheme<Theme>();

  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: theme.colors.background,
          },
          animation: 'slide_from_right',
          animationDuration: 200,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          presentation: 'card',
        }}
      >
        <Stack.Screen 
          name="Onboarding" 
          component={OnboardingScreen}
          options={{
            animation: 'fade',
          }}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{
            animation: 'fade',
          }}
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUpScreen}
          options={{
            animation: 'fade',
          }}
        />
        <Stack.Screen 
          name="ForgotPassword" 
          component={ForgotPasswordScreen}
          options={{
            animation: 'fade',
          }}
        />
        <Stack.Screen 
          name="Main" 
          component={MainTabs}
          options={{
            animation: 'fade',
          }}
        />
        <Stack.Screen 
          name="ExerciseDetail" 
          component={ExerciseDetailScreen}
          options={{
            animation: 'slide_from_bottom',
          }}
        />
        <Stack.Screen 
          name="ExerciseSession" 
          component={ExerciseSessionScreen}
          options={{
            animation: 'slide_from_bottom',
            gestureEnabled: false,
          }}
        />
        <Stack.Screen 
          name="Settings" 
          component={SettingsScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen 
          name="Notifications" 
          component={NotificationsScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen 
          name="Subscription" 
          component={SubscriptionScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
        <Stack.Screen 
          name="BuddySystem" 
          component={BuddySystemScreen}
          options={{
            animation: 'slide_from_right',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}; 