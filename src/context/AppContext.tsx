import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { UserProfile, Exercise } from '../types';

interface AppState {
  userProfile: UserProfile | null;
  completedExercises: string[];
  currentStreak: number;
  totalMinutes: number;
  favoriteExercise: string | null;
}

type AppAction =
  | { type: 'SET_USER_PROFILE'; payload: UserProfile }
  | { type: 'COMPLETE_EXERCISE'; payload: Exercise }
  | { type: 'UPDATE_STREAK'; payload: number }
  | { type: 'UPDATE_TOTAL_MINUTES'; payload: number }
  | { type: 'SET_FAVORITE_EXERCISE'; payload: string };

const initialState: AppState = {
  userProfile: null,
  completedExercises: [],
  currentStreak: 0,
  totalMinutes: 0,
  favoriteExercise: null,
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | undefined>(undefined);

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_USER_PROFILE':
      return {
        ...state,
        userProfile: action.payload,
      };
    case 'COMPLETE_EXERCISE':
      return {
        ...state,
        completedExercises: [...state.completedExercises, action.payload.id],
        totalMinutes: state.totalMinutes + action.payload.duration,
      };
    case 'UPDATE_STREAK':
      return {
        ...state,
        currentStreak: action.payload,
      };
    case 'UPDATE_TOTAL_MINUTES':
      return {
        ...state,
        totalMinutes: action.payload,
      };
    case 'SET_FAVORITE_EXERCISE':
      return {
        ...state,
        favoriteExercise: action.payload,
      };
    default:
      return state;
  }
}

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
} 