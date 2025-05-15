import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme/theme';
import { Box } from '../components/Box';
import { Text } from '../components/Text';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  image: string;
}

interface Course {
  id: string;
  title: string;
  lessons: number;
  duration: string;
  progress: number;
}

// Mock data for articles
const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'Benefits of Regular Exercise',
    category: 'Health',
    readTime: '5 min',
    image: 'https://example.com/image1.jpg',
  },
  {
    id: '2',
    title: 'Mindfulness Techniques',
    category: 'Wellness',
    readTime: '4 min',
    image: 'https://example.com/image2.jpg',
  },
  {
    id: '3',
    title: 'Nutrition Basics',
    category: 'Nutrition',
    readTime: '6 min',
    image: 'https://example.com/image3.jpg',
  },
];

// Mock data for courses
const COURSES: Course[] = [
  {
    id: '1',
    title: 'Beginner\'s Guide to Fitness',
    lessons: 12,
    duration: '2 hours',
    progress: 0,
  },
  {
    id: '2',
    title: 'Advanced Workout Techniques',
    lessons: 15,
    duration: '3 hours',
    progress: 0,
  },
];

export const LearnScreen: React.FC = () => {
  const theme = useTheme<Theme>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Box padding="m">
          <Text variant="header" marginBottom="m">
            Learn
          </Text>

          {/* Featured Articles */}
          <Box marginBottom="l">
            <Text variant="subheader" marginBottom="m">
              Featured Articles
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.articleScroll}
            >
              {ARTICLES.map(article => (
                <TouchableOpacity key={article.id}>
                  <Box
                    backgroundColor="cardBackground"
                    borderRadius="m"
                    padding="m"
                    marginRight="m"
                    width={280}
                  >
                    <Box
                      backgroundColor="gray200"
                      height={160}
                      borderRadius="m"
                      marginBottom="s"
                    />
                    <Text variant="title" marginBottom="xs">
                      {article.title}
                    </Text>
                    <Box flexDirection="row" justifyContent="space-between">
                      <Text variant="caption" color="gray600">
                        {article.category}
                      </Text>
                      <Text variant="caption" color="gray600">
                        {article.readTime} read
                      </Text>
                    </Box>
                  </Box>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </Box>

          {/* Courses */}
          <Box>
            <Text variant="subheader" marginBottom="m">
              Your Courses
            </Text>
            {COURSES.map(course => (
              <TouchableOpacity key={course.id}>
                <Box
                  backgroundColor="cardBackground"
                  borderRadius="m"
                  padding="m"
                  marginBottom="s"
                >
                  <Text variant="title" marginBottom="xs">
                    {course.title}
                  </Text>
                  <Box flexDirection="row" justifyContent="space-between" marginBottom="s">
                    <Text variant="body" color="gray600">
                      {course.lessons} lessons
                    </Text>
                    <Text variant="body" color="gray600">
                      {course.duration}
                    </Text>
                  </Box>
                  <Box
                    backgroundColor="gray200"
                    height={4}
                    borderRadius="s"
                    overflow="hidden"
                  >
                    <Box
                      backgroundColor="primary"
                      height="100%"
                      width={`${course.progress}%`}
                    />
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
  articleScroll: {
    marginBottom: 16,
  },
}); 