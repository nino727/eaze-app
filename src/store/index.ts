import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Exercise, User, ExerciseHistory, MoodEntry } from '../types';

interface AppState {
  // User state
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  updateUserPreferences: (preferences: Partial<User['preferences']>) => void;

  // Exercise state
  currentExercise: Exercise | null;
  exerciseHistory: ExerciseHistory[];
  setCurrentExercise: (exercise: Exercise | null) => void;
  addExerciseHistory: (history: ExerciseHistory) => void;

  // Mood tracking
  moodHistory: MoodEntry[];
  addMoodEntry: (entry: MoodEntry) => void;

  // UI state
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  showOnboarding: boolean;
  setShowOnboarding: (show: boolean) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      // User state
      user: null,
      isAuthenticated: false,
      setUser: (user) => set({ user, isAuthenticated: !!user }),
      updateUserPreferences: (preferences) =>
        set((state) => ({
          user: state.user
            ? { ...state.user, preferences: { ...state.user.preferences, ...preferences } }
            : null,
        })),

      // Exercise state
      currentExercise: null,
      exerciseHistory: [],
      setCurrentExercise: (exercise) => set({ currentExercise: exercise }),
      addExerciseHistory: (history) =>
        set((state) => ({
          exerciseHistory: [...state.exerciseHistory, history],
        })),

      // Mood tracking
      moodHistory: [],
      addMoodEntry: (entry) =>
        set((state) => ({
          moodHistory: [...state.moodHistory, entry],
        })),

      // UI state
      isDarkMode: false,
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
      showOnboarding: true,
      setShowOnboarding: (show) => set({ showOnboarding: show }),
    }),
    {
      name: 'ease-app-storage',
      partialize: (state) => ({
        user: state.user,
        isDarkMode: state.isDarkMode,
        showOnboarding: state.showOnboarding,
        exerciseHistory: state.exerciseHistory,
        moodHistory: state.moodHistory,
      }),
    }
  )
); 