import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface SettingsState {
  darkMode: boolean;
  notifications: boolean;
  soundEffects: boolean;
  toggleDarkMode: () => void;
  toggleNotifications: () => void;
  toggleSoundEffects: () => void;
}

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      darkMode: false,
      notifications: true,
      soundEffects: true,
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
      toggleNotifications: () =>
        set((state) => ({ notifications: !state.notifications })),
      toggleSoundEffects: () =>
        set((state) => ({ soundEffects: !state.soundEffects })),
    }),
    {
      name: 'settings-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
); 