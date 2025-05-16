import { createTheme } from '@shopify/restyle';

export interface Exercise {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  duration: number;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  icon: string;
  color: string;
  instructions: string[];
  steps: {
    title: string;
    description: string;
    duration: number;
  }[];
}

export interface Affirmation {
  id: string;
  text: string;
  category: string;
}

export interface Theme {
  colors: {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    secondary: string;
    secondaryLight: string;
    secondaryDark: string;
    background: string;
    backgroundAlt: string;
    text: string;
    textLight: string;
    accent1: string;
    accent2: string;
    accent3: string;
    success: string;
    error: string;
    warning: string;
    info: string;
    gray100: string;
    gray200: string;
    gray300: string;
    gray400: string;
    gray500: string;
    gray600: string;
    gray700: string;
    gray800: string;
    gray900: string;
  };
  spacing: {
    xs: number;
    s: number;
    m: number;
    l: number;
    xl: number;
    xxl: number;
  };
  borderRadii: {
    none: number;
    xs: number;
    s: number;
    m: number;
    l: number;
    xl: number;
    round: number;
  };
  textVariants: {
    header: {
      fontSize: number;
      fontWeight: string;
      lineHeight: number;
    };
    subheader: {
      fontSize: number;
      fontWeight: string;
      lineHeight: number;
    };
    body: {
      fontSize: number;
      lineHeight: number;
    };
    bodySmall: {
      fontSize: number;
      lineHeight: number;
    };
    caption: {
      fontSize: number;
      lineHeight: number;
    };
    button: {
      fontSize: number;
      fontWeight: string;
      lineHeight: number;
    };
  };
  breakpoints: {
    phone: number;
    tablet: number;
  };
  animation: {
    timing: {
      fast: number;
      normal: number;
      slow: number;
    };
    spring: {
      damping: number;
      stiffness: number;
    };
  };
}

export interface UserProfile {
  name: string;
  goals: string[];
  experience: 'beginner' | 'intermediate' | 'advanced';
  notifications: boolean;
  darkMode: boolean;
  avatar: number;
  streak: number;
  completedExercises: string[];
  moodHistory: {
    mood: 'good' | 'okay' | 'bad';
    timestamp: string;
  }[];
  favoriteExercises: string[];
}

export interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
}

export interface WeeklyData {
  day: string;
  minutes: number;
}

export interface Stats {
  streak: number;
  totalSessions: number;
  totalMinutes: number;
  favoriteExercise: string;
}

export interface AppState {
  isListening: boolean;
  isPlaying: boolean;
  isMuted: boolean;
  currentExercise: Exercise | null;
  showInfo: boolean;
  showMenu: boolean;
  currentScreen: Screen;
  affirmation: Affirmation | null;
  onboardingStep: number;
  userProfile: UserProfile | null;
  showNotification: boolean;
  notificationMessage: string;
}

export type Screen = 'home' | 'exercise' | 'library' | 'stats' | 'learn' | 'settings';

export const theme = createTheme<Theme>({
  colors: {
    primary: '#007AFF',
    primaryLight: '#4DA3FF',
    primaryDark: '#0055B3',
    secondary: '#5856D6',
    secondaryLight: '#7A79E0',
    secondaryDark: '#3D3C96',
    background: '#FFFFFF',
    backgroundAlt: '#F8F9FA',
    text: '#000000',
    textLight: '#6C757D',
    accent1: '#FF9500',
    accent2: '#FF2D55',
    accent3: '#5AC8FA',
    success: '#34C759',
    error: '#FF3B30',
    warning: '#FFCC00',
    info: '#5856D6',
    gray100: '#F8F9FA',
    gray200: '#E9ECEF',
    gray300: '#DEE2E6',
    gray400: '#CED4DA',
    gray500: '#ADB5BD',
    gray600: '#6C757D',
    gray700: '#495057',
    gray800: '#343A40',
    gray900: '#212529',
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 48,
  },
  borderRadii: {
    none: 0,
    xs: 2,
    s: 4,
    m: 8,
    l: 12,
    xl: 16,
    round: 9999,
  },
  textVariants: {
    header: {
      fontSize: 32,
      fontWeight: '700',
      lineHeight: 40,
    },
    subheader: {
      fontSize: 24,
      fontWeight: '600',
      lineHeight: 32,
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
    },
    bodySmall: {
      fontSize: 14,
      lineHeight: 20,
    },
    caption: {
      fontSize: 12,
      lineHeight: 16,
    },
    button: {
      fontSize: 16,
      fontWeight: '600',
      lineHeight: 24,
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  animation: {
    timing: {
      fast: 200,
      normal: 300,
      slow: 500,
    },
    spring: {
      damping: 20,
      stiffness: 100,
    },
  },
});

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  preferences: {
    notifications: boolean;
    darkMode: boolean;
    soundEnabled: boolean;
  };
  stats: {
    totalExercises: number;
    totalMinutes: number;
    streak: number;
    lastExercise?: string;
  };
}

export interface ExerciseHistory {
  id: string;
  exerciseId: string;
  completedAt: string;
  duration: number;
  rating?: number;
  notes?: string;
}

export interface MoodEntry {
  id: string;
  userId: string;
  timestamp: string;
  rating: number;
  notes?: string;
  activities: string[];
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'reminder' | 'achievement' | 'tip';
  read: boolean;
  createdAt: string;
}

export interface Achievement {
  id: string;
  userId: string;
  type: 'streak' | 'milestone' | 'challenge';
  title: string;
  description: string;
  unlockedAt: string;
  progress: number;
  target: number;
}

export interface Buddy {
  id: string;
  userId: string;
  buddyId: string;
  status: 'pending' | 'active';
  lastSyncDate?: string;
  sharedExercises: string[];
}

export interface AssessmentQuestion {
  id: string;
  question: string;
  options: {
    text: string;
    value: number;
  }[];
  category: 'physical' | 'emotional' | 'mental';
}

export interface UserProgress {
  userId: string;
  exerciseId: string;
  completedAt: string;
  rating: number;
  notes?: string;
  effectiveness: number; // 1-10
}

export interface Subscription {
  id: string;
  userId: string;
  tier: 'free' | 'premium';
  startDate: string;
  endDate?: string;
  status: 'active' | 'cancelled' | 'expired';
  trialEndDate?: string;
}

export interface Settings {
  userId: string;
  notifications: boolean;
  darkMode: boolean;
  reminderFrequency: 'hourly' | 'daily' | 'custom';
  customReminderTime?: string;
  language: string;
  accessibility: {
    fontSize: number;
    highContrast: boolean;
    reducedMotion: boolean;
  };
} 