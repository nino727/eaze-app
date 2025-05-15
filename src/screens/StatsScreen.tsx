import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme/theme';
import { Box } from '../components/Box';
import { Text } from '../components/Text';
import { SafeAreaView } from 'react-native-safe-area-context';

interface WeeklyStats {
  exercises: number[];
  minutes: number[];
  calories: number[];
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
}

// Mock data for stats
const WEEKLY_STATS: WeeklyStats = {
  exercises: [3, 4, 2, 5, 3, 4, 3],
  minutes: [15, 20, 10, 25, 15, 20, 15],
  calories: [120, 160, 80, 200, 120, 160, 120],
};

const ACHIEVEMENTS: Achievement[] = [
  {
    id: '1',
    title: '7 Day Streak',
    description: 'Completed exercises for 7 days in a row',
    date: '2024-03-10',
  },
  {
    id: '2',
    title: 'First Workout',
    description: 'Completed your first workout',
    date: '2024-03-03',
  },
];

export const StatsScreen: React.FC = () => {
  const theme = useTheme<Theme>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Box padding="m">
          <Text variant="header" marginBottom="m">
            Your Stats
          </Text>

          {/* Weekly Overview */}
          <Box
            backgroundColor="cardBackground"
            borderRadius="m"
            padding="m"
            marginBottom="m"
          >
            <Text variant="subheader" marginBottom="m">
              Weekly Overview
            </Text>
            <Box flexDirection="row" justifyContent="space-between" marginBottom="m">
              <Box>
                <Text variant="body" color="gray600">
                  Total Exercises
                </Text>
                <Text variant="title">
                  {WEEKLY_STATS.exercises.reduce((a, b) => a + b, 0)}
                </Text>
              </Box>
              <Box>
                <Text variant="body" color="gray600">
                  Total Minutes
                </Text>
                <Text variant="title">
                  {WEEKLY_STATS.minutes.reduce((a, b) => a + b, 0)}
                </Text>
              </Box>
              <Box>
                <Text variant="body" color="gray600">
                  Total Calories
                </Text>
                <Text variant="title">
                  {WEEKLY_STATS.calories.reduce((a, b) => a + b, 0)}
                </Text>
              </Box>
            </Box>

            {/* Simple bar chart for exercises */}
            <Box flexDirection="row" height={100} alignItems="flex-end">
              {WEEKLY_STATS.exercises.map((value, index) => (
                <Box
                  key={index}
                  flex={1}
                  backgroundColor="primary"
                  height={`${(value / 5) * 100}%`}
                  marginHorizontal="xs"
                  borderRadius="s"
                />
              ))}
            </Box>
          </Box>

          {/* Achievements */}
          <Box>
            <Text variant="subheader" marginBottom="m">
              Achievements
            </Text>
            {ACHIEVEMENTS.map(achievement => (
              <Box
                key={achievement.id}
                backgroundColor="cardBackground"
                borderRadius="m"
                padding="m"
                marginBottom="s"
              >
                <Text variant="title" marginBottom="xs">
                  {achievement.title}
                </Text>
                <Text variant="body" color="gray600" marginBottom="xs">
                  {achievement.description}
                </Text>
                <Text variant="caption" color="gray500">
                  {achievement.date}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}); 