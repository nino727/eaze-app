import { Ionicons } from '@expo/vector-icons';

export const ICONS = {
  // Navigation
  home: 'home-outline',
  profile: 'person-outline',
  settings: 'settings-outline',
  back: 'chevron-back-outline',
  close: 'close-outline',
  
  // Exercise
  exercise: 'fitness-outline',
  timer: 'timer-outline',
  play: 'play-outline',
  pause: 'pause-outline',
  stop: 'stop-outline',
  skip: 'play-skip-forward-outline',
  
  // Achievements
  firstSteps: 'footsteps-outline',
  gettingStarted: 'rocket-outline',
  dedicated: 'diamond-outline',
  streak: 'flame-outline',
  warrior: 'shield-outline',
  timeMaster: 'hourglass-outline',
  champion: 'trophy-outline',
  moodTracker: 'pulse-outline',
  moodMaster: 'sparkles-outline',
  
  // Mood
  happy: 'happy-outline',
  neutral: 'neutral-outline',
  sad: 'sad-outline',
  
  // Actions
  edit: 'pencil-outline',
  delete: 'trash-outline',
  share: 'share-social-outline',
  favorite: 'heart-outline',
  notification: 'notifications-outline',
  
  // Status
  check: 'checkmark-circle-outline',
  warning: 'warning-outline',
  error: 'alert-circle-outline',
  info: 'information-circle-outline',
  
  // Social
  buddy: 'people-outline',
  message: 'chatbubble-outline',
  group: 'people-circle-outline',
  
  // Settings
  darkMode: 'moon-outline',
  lightMode: 'sunny-outline',
  language: 'language-outline',
  privacy: 'lock-closed-outline',
  subscription: 'card-outline',
} as const;

export type IconName = keyof typeof ICONS;

export function getIcon(name: IconName): string {
  return ICONS[name];
}

export function Icon({ name, size = 24, color }: { name: IconName; size?: number; color?: string }) {
  return <Ionicons name={getIcon(name)} size={size} color={color} />;
} 