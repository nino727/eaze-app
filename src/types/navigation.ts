import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  Main: undefined;
  Home: undefined;
  ExerciseHistory: undefined;
  Profile: undefined;
  ExerciseDetail: { id: string };
  ExerciseSession: { id: string };
  Settings: undefined;
  Notifications: undefined;
  Subscription: undefined;
  BuddySystem: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  ExerciseHistory: undefined;
  Profile: undefined;
};

export type SettingsStackParamList = {
  Settings: undefined;
  Notifications: undefined;
  Subscription: undefined;
  BuddySystem: undefined;
}; 