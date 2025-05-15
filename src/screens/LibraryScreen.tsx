import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme/theme';
import { Box } from '../components/Box';
import { Text } from '../components/Text';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Exercise {
  id: string;
  title: string;
  duration: string;
  level: string;
  category: string;
}

// Mock data for exercises
const EXERCISES: Exercise[] = [
  {
    id: '1',
    title: 'Morning Stretch',
    duration: '10 min',
    level: 'Beginner',
    category: 'Stretching',
  },
  {
    id: '2',
    title: 'Core Workout',
    duration: '15 min',
    level: 'Intermediate',
    category: 'Strength',
  },
  {
    id: '3',
    title: 'Yoga Flow',
    duration: '20 min',
    level: 'Beginner',
    category: 'Yoga',
  },
  {
    id: '4',
    title: 'HIIT Cardio',
    duration: '25 min',
    level: 'Advanced',
    category: 'Cardio',
  },
];

const CATEGORIES = ['All', 'Stretching', 'Strength', 'Yoga', 'Cardio'] as const;
const LEVELS = ['All', 'Beginner', 'Intermediate', 'Advanced'] as const;

type Category = typeof CATEGORIES[number];
type Level = typeof LEVELS[number];

export const LibraryScreen: React.FC = () => {
  const theme = useTheme<Theme>();
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [selectedLevel, setSelectedLevel] = useState<Level>('All');

  const filteredExercises = EXERCISES.filter(exercise => {
    const categoryMatch = selectedCategory === 'All' || exercise.category === selectedCategory;
    const levelMatch = selectedLevel === 'All' || exercise.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Box padding="m">
          <Text variant="header" marginBottom="m">
            Exercise Library
          </Text>

          {/* Categories */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.filterScroll}
          >
            {CATEGORIES.map(category => (
              <TouchableOpacity
                key={category}
                onPress={() => setSelectedCategory(category)}
              >
                <Box
                  backgroundColor={selectedCategory === category ? 'primary' : 'backgroundAlt'}
                  paddingHorizontal="m"
                  paddingVertical="s"
                  marginRight="s"
                  borderRadius="m"
                >
                  <Text
                    variant="button"
                    color={selectedCategory === category ? 'white' : 'text'}
                  >
                    {category}
                  </Text>
                </Box>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Levels */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.filterScroll}
          >
            {LEVELS.map(level => (
              <TouchableOpacity
                key={level}
                onPress={() => setSelectedLevel(level)}
              >
                <Box
                  backgroundColor={selectedLevel === level ? 'primary' : 'backgroundAlt'}
                  paddingHorizontal="m"
                  paddingVertical="s"
                  marginRight="s"
                  borderRadius="m"
                >
                  <Text
                    variant="button"
                    color={selectedLevel === level ? 'white' : 'text'}
                  >
                    {level}
                  </Text>
                </Box>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Exercise List */}
          <Box marginTop="m">
            {filteredExercises.map(exercise => (
              <TouchableOpacity key={exercise.id}>
                <Box
                  backgroundColor="cardBackground"
                  borderRadius="m"
                  padding="m"
                  marginBottom="s"
                >
                  <Text variant="title" marginBottom="xs">
                    {exercise.title}
                  </Text>
                  <Box flexDirection="row" justifyContent="space-between">
                    <Text variant="body" color="gray600">
                      {exercise.duration}
                    </Text>
                    <Text variant="body" color="gray600">
                      {exercise.level}
                    </Text>
                    <Text variant="body" color="gray600">
                      {exercise.category}
                    </Text>
                  </Box>
                </Box>
              </TouchableOpacity>
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
  filterScroll: {
    marginBottom: 16,
  },
}); 