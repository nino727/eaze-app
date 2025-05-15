import React from 'react';
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme/theme';
import { Box } from '../../components/Box';
import { Text } from '../../components/Text';
import { Card } from '../../components/Card';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainTabParamList } from '../../navigation/types';
import { mockExercises } from '../../data/mockExercises';
import { Exercise } from '../../types';

type ExercisesScreenNavigationProp = NativeStackNavigationProp<MainTabParamList, 'Exercises'>;

export const ExercisesScreen: React.FC = () => {
  const theme = useTheme<Theme>();
  const navigation = useNavigation<ExercisesScreenNavigationProp>();

  const renderExerciseCard = ({ item }: { item: Exercise }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ExerciseDetail', { id: item.id })}
    >
      <Card variant="elevated" marginBottom="m">
        <Box padding="m">
          <Box flexDirection="row" alignItems="center" marginBottom="s">
            <Box
              width={40}
              height={40}
              borderRadius="round"
              backgroundColor="primary"
              marginRight="m"
              alignItems="center"
              justifyContent="center"
            >
              <Text variant="title" color="white">
                {item.icon}
              </Text>
            </Box>
            <Box flex={1}>
              <Text variant="title" color="text" marginBottom="xs">
                {item.title}
              </Text>
              <Text variant="body" color="textSecondary" numberOfLines={2}>
                {item.description}
              </Text>
            </Box>
          </Box>
          <Box flexDirection="row" alignItems="center">
            <Box
              backgroundColor="gray200"
              padding="xs"
              borderRadius="s"
              marginRight="s"
            >
              <Text variant="caption" color="textSecondary">
                {item.duration} min
              </Text>
            </Box>
            <Box
              backgroundColor="gray200"
              padding="xs"
              borderRadius="s"
            >
              <Text variant="caption" color="textSecondary">
                {item.difficulty}
              </Text>
            </Box>
          </Box>
        </Box>
      </Card>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Box padding="m">
        <Text variant="header" color="text" marginBottom="m">
          Exercises
        </Text>
        <FlatList
          data={mockExercises}
          renderItem={renderExerciseCard}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 16,
  },
}); 