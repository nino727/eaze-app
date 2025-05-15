import { NavigatorScreenParams } from '@react-navigation/native';
import { Exercise } from '../types';

export type RootStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  Main: NavigatorScreenParams<MainTabParamList>;
  Exercise: { id: string };
  Settings: undefined;
};

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  EmailVerification: { email: string };
  Welcome: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  ExerciseHistory: undefined;
  Profile: undefined;
};

export type ExerciseStackParamList = {
  ExerciseList: undefined;
  ExerciseDetail: { id: string };
  ExerciseSession: { id: string };
  Assessment: undefined;
};

export type ProfileStackParamList = {
  Settings: undefined;
  Notifications: undefined;
  Subscription: undefined;
  BuddySystem: undefined;
};

export type TabParamList = {
  HomeTab: undefined;
  LibraryTab: undefined;
  StatsTab: undefined;
  LearnTab: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
} 