import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { NotificationsScreen } from '../screens/settings/NotificationsScreen';
import { SubscriptionScreen } from '../screens/settings/SubscriptionScreen';
import { BuddySystemScreen } from '../screens/settings/BuddySystemScreen';
import { ProfileStackParamList } from './types';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export const SettingsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerBackTitle: 'Back',
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'Settings',
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          title: 'Notifications',
        }}
      />
      <Stack.Screen
        name="Subscription"
        component={SubscriptionScreen}
        options={{
          title: 'Subscription',
        }}
      />
      <Stack.Screen
        name="BuddySystem"
        component={BuddySystemScreen}
        options={{
          title: 'Practice Buddies',
        }}
      />
    </Stack.Navigator>
  );
}; 