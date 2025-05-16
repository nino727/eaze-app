import React from 'react';
import { View, ScrollView, StyleSheet, Dimensions, Pressable } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme';
import { Text } from '../components/ui/Text';
import { Button } from '../components/ui/Button';
import { Icon } from '../components/ui/Icon';
import Animated, {
  FadeInDown,
  FadeInRight,
  useAnimatedStyle,
  withSpring,
  useSharedValue,
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { useStore } from '../store';
import { Box } from '../components/Box';
import { calculateStreak, calculateAchievements, Achievement } from '../utils/streak';

const { width } = Dimensions.get('window');

export const ProfileScreen = () => {
  const theme = useTheme<Theme>();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { user, exerciseHistory, moodHistory, isDarkMode, toggleDarkMode } = useStore();

  const stats = {
    totalExercises: exerciseHistory.length,
    totalMinutes: exerciseHistory.reduce((acc, curr) => acc + curr.duration, 0),
    streak: calculateStreak(exerciseHistory),
    averageMood: moodHistory.length > 0
      ? moodHistory.reduce((acc, curr) => acc + curr.rating, 0) / moodHistory.length
      : 0,
  };

  const achievements = calculateAchievements(exerciseHistory, moodHistory);

  // Animation values for achievement cards
  const achievementScale = useSharedValue(1);
  const achievementStyle = useAnimatedStyle(() => ({
    transform: [{ scale: achievementScale.value }],
  }));

  const handleAchievementPress = () => {
    achievementScale.value = withSpring(0.95, {}, () => {
      achievementScale.value = withSpring(1);
    });
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      showsVerticalScrollIndicator={false}
    >
      <Animated.View entering={FadeInDown.delay(200)} style={styles.header}>
        <View style={styles.avatarContainer}>
          <View style={[styles.avatar, { backgroundColor: theme.colors.primary }]}>
            <Text variant="header" color="background">
              {user?.name?.[0]?.toUpperCase() || 'U'}
            </Text>
          </View>
        </View>
        <Text variant="header" style={styles.name}>
          {user?.name || 'User'}
        </Text>
        <Text variant="bodySmall" color="textSecondary">
          {user?.email || 'user@example.com'}
        </Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(400)} style={styles.statsContainer}>
        <Box
          backgroundColor="backgroundAlt"
          padding="m"
          borderRadius="m"
          flex={1}
          marginRight="s"
        >
          <Text variant="title" color="textSecondary">
            Exercises
          </Text>
          <Text variant="header" style={styles.statValue}>
            {stats.totalExercises}
          </Text>
        </Box>
        <Box
          backgroundColor="backgroundAlt"
          padding="m"
          borderRadius="m"
          flex={1}
          marginLeft="s"
        >
          <Text variant="title" color="textSecondary">
            Minutes
          </Text>
          <Text variant="header" style={styles.statValue}>
            {stats.totalMinutes}
          </Text>
        </Box>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(500)} style={styles.statsContainer}>
        <Box
          backgroundColor="backgroundAlt"
          padding="m"
          borderRadius="m"
          flex={1}
          marginRight="s"
        >
          <Text variant="title" color="textSecondary">
            Streak
          </Text>
          <Text variant="header" style={styles.statValue}>
            {stats.streak} days
          </Text>
        </Box>
        <Box
          backgroundColor="backgroundAlt"
          padding="m"
          borderRadius="m"
          flex={1}
          marginLeft="s"
        >
          <Text variant="title" color="textSecondary">
            Avg. Mood
          </Text>
          <Text variant="header" style={styles.statValue}>
            {stats.averageMood.toFixed(1)}
          </Text>
        </Box>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(600)} style={styles.section}>
        <Text variant="title" style={styles.sectionTitle}>
          Achievements
        </Text>
        {achievements.map((achievement: Achievement, index: number) => (
          <Pressable
            key={achievement.id}
            onPress={handleAchievementPress}
          >
            <Animated.View
              entering={FadeInRight.delay(200 * index)}
              style={[styles.achievementItem, achievementStyle]}
            >
              <Icon
                name={achievement.icon}
                size={24}
                color={achievement.unlocked ? theme.colors.primary : theme.colors.textSecondary}
              />
              <View style={styles.achievementContent}>
                <Text 
                  variant="body" 
                  color={achievement.unlocked ? 'text' : 'textSecondary'}
                >
                  {achievement.title}
                </Text>
                <Text variant="caption" color="textSecondary">
                  {achievement.description}
                </Text>
              </View>
              {achievement.unlocked && (
                <Icon
                  name="check"
                  size={20}
                  color={theme.colors.primary}
                />
              )}
            </Animated.View>
          </Pressable>
        ))}
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(800)} style={styles.section}>
        <Text variant="title" style={styles.sectionTitle}>
          Settings
        </Text>
        <Box
          backgroundColor="backgroundAlt"
          padding="m"
          borderRadius="m"
          marginBottom="s"
        >
          <Button
            variant="outline"
            size="md"
            label="Notifications"
            onPress={() => navigation.navigate('Notifications')}
          />
        </Box>
        <Box
          backgroundColor="backgroundAlt"
          padding="m"
          borderRadius="m"
          marginBottom="s"
        >
          <Button
            variant="outline"
            size="md"
            label={isDarkMode ? 'Light Mode' : 'Dark Mode'}
            onPress={toggleDarkMode}
          />
        </Box>
        <Box
          backgroundColor="backgroundAlt"
          padding="m"
          borderRadius="m"
          marginBottom="s"
        >
          <Button
            variant="outline"
            size="md"
            label="Subscription"
            onPress={() => navigation.navigate('Subscription')}
          />
        </Box>
        <Box
          backgroundColor="backgroundAlt"
          padding="m"
          borderRadius="m"
        >
          <Button
            variant="outline"
            size="md"
            label="Buddy System"
            onPress={() => navigation.navigate('BuddySystem')}
          />
        </Box>
      </Animated.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarContainer: {
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    marginBottom: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  statValue: {
    marginTop: 8,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 16,
  },
  achievementItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  achievementContent: {
    marginLeft: 12,
    flex: 1,
  },
}); 