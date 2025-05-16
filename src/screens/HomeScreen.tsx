import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text } from '../components/ui/Text';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon } from '../components/ui/Icon';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export function HomeScreen() {
  const theme = useTheme<Theme>();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text variant="header">Welcome Back</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
            <Icon name="notification" size={24} color={theme.colors.text} />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text variant="subheader">Today's Exercises</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.exerciseScroll}>
            {['Breathing', 'Meditation', 'Yoga'].map((exercise) => (
              <TouchableOpacity
                key={exercise}
                style={[styles.exerciseCard, { backgroundColor: theme.colors.cardBackground }]}
                onPress={() => navigation.navigate('ExerciseDetail', { id: exercise })}
              >
                <Icon name="exercise" size={32} color={theme.colors.primary} />
                <Text variant="body">{exercise}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text variant="subheader">Your Progress</Text>
          <View style={[styles.progressCard, { backgroundColor: theme.colors.cardBackground }]}>
            <View style={styles.progressItem}>
              <Icon name="streak" size={24} color={theme.colors.accent1} />
              <Text variant="body">3 Day Streak</Text>
            </View>
            <View style={styles.progressItem}>
              <Icon name="timeMaster" size={24} color={theme.colors.accent2} />
              <Text variant="body">2 Hours Total</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text variant="subheader">Quick Actions</Text>
          <View style={styles.quickActions}>
            <TouchableOpacity
              style={[styles.actionButton, { backgroundColor: theme.colors.primary }]}
              onPress={() => navigation.navigate('ExerciseSession', { id: 'breathing' })}
            >
              <Icon name="play" size={24} color={theme.colors.white} />
              <Text variant="body" style={{ color: theme.colors.white }}>Start Session</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionButton, { backgroundColor: theme.colors.secondary }]}
              onPress={() => navigation.navigate('BuddySystem')}
            >
              <Icon name="buddy" size={24} color={theme.colors.white} />
              <Text variant="body" style={{ color: theme.colors.white }}>Find Buddy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  section: {
    padding: 16,
  },
  exerciseScroll: {
    marginTop: 16,
  },
  exerciseCard: {
    width: 120,
    height: 120,
    borderRadius: 12,
    padding: 16,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  progressCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    borderRadius: 12,
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  progressItem: {
    alignItems: 'center',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 8,
  },
}); 