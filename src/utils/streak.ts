import { ExerciseHistory } from '../types';
import { IconName } from '../constants/icons';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  unlocked: boolean;
}

export function calculateStreak(exerciseHistory: ExerciseHistory[]): number {
  if (!exerciseHistory.length) return 0;

  // Sort history by date in descending order
  const sortedHistory = [...exerciseHistory].sort(
    (a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
  );

  let streak = 1;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const lastExerciseDate = new Date(sortedHistory[0].completedAt);
  lastExerciseDate.setHours(0, 0, 0, 0);

  // If last exercise was not today or yesterday, streak is broken
  const dayDiff = Math.floor((today.getTime() - lastExerciseDate.getTime()) / (1000 * 60 * 60 * 24));
  if (dayDiff > 1) return 0;

  // Check previous days
  for (let i = 1; i < sortedHistory.length; i++) {
    const currentDate = new Date(sortedHistory[i].completedAt);
    currentDate.setHours(0, 0, 0, 0);

    const prevDate = new Date(sortedHistory[i - 1].completedAt);
    prevDate.setHours(0, 0, 0, 0);

    const diffDays = Math.floor((prevDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}

export function calculateAchievements(exerciseHistory: ExerciseHistory[], moodHistory: any[]): Achievement[] {
  const achievements: Achievement[] = [];
  const totalExercises = exerciseHistory.length;
  const totalMinutes = exerciseHistory.reduce((acc, curr) => acc + curr.duration, 0);
  const streak = calculateStreak(exerciseHistory);
  const moodEntries = moodHistory.length;

  // Exercise count achievements
  if (totalExercises >= 1) {
    achievements.push({
      id: 'first-exercise',
      title: 'First Steps',
      description: 'Completed your first exercise',
      icon: 'firstSteps',
      unlocked: true,
    });
  }
  if (totalExercises >= 10) {
    achievements.push({
      id: 'exercise-10',
      title: 'Getting Started',
      description: 'Completed 10 exercises',
      icon: 'gettingStarted',
      unlocked: true,
    });
  }
  if (totalExercises >= 50) {
    achievements.push({
      id: 'exercise-50',
      title: 'Dedicated Practitioner',
      description: 'Completed 50 exercises',
      icon: 'dedicated',
      unlocked: true,
    });
  }

  // Streak achievements
  if (streak >= 3) {
    achievements.push({
      id: 'streak-3',
      title: '3 Day Streak',
      description: 'Exercised for 3 days in a row',
      icon: 'streak',
      unlocked: true,
    });
  }
  if (streak >= 7) {
    achievements.push({
      id: 'streak-7',
      title: 'Week Warrior',
      description: 'Exercised for 7 days in a row',
      icon: 'warrior',
      unlocked: true,
    });
  }

  // Time achievements
  if (totalMinutes >= 60) {
    achievements.push({
      id: 'time-60',
      title: 'Hour Master',
      description: 'Completed 60 minutes of exercises',
      icon: 'timeMaster',
      unlocked: true,
    });
  }
  if (totalMinutes >= 300) {
    achievements.push({
      id: 'time-300',
      title: 'Time Champion',
      description: 'Completed 300 minutes of exercises',
      icon: 'champion',
      unlocked: true,
    });
  }

  // Mood tracking achievements
  if (moodEntries >= 7) {
    achievements.push({
      id: 'mood-7',
      title: 'Mood Tracker',
      description: 'Tracked your mood for 7 days',
      icon: 'moodTracker',
      unlocked: true,
    });
  }
  if (moodEntries >= 30) {
    achievements.push({
      id: 'mood-30',
      title: 'Mood Master',
      description: 'Tracked your mood for 30 days',
      icon: 'moodMaster',
      unlocked: true,
    });
  }

  return achievements;
} 