import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme/theme';
import { Box } from '../../components/Box';
import { Text } from '../../components/Text';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import { mockExercises } from '../../data/mockExercises';

type ExerciseDetailScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ExerciseDetail'>;
type ExerciseDetailScreenRouteProp = RouteProp<RootStackParamList, 'ExerciseDetail'>;

export const ExerciseDetailScreen: React.FC = () => {
  const theme = useTheme<Theme>();
  const navigation = useNavigation<ExerciseDetailScreenNavigationProp>();
  const route = useRoute<ExerciseDetailScreenRouteProp>();
  const { id } = route.params;

  const exercise = mockExercises.find((ex) => ex.id === id);

  const handleStartExercise = () => {
    navigation.navigate('ExerciseSession', { id });
  };

  if (!exercise) {
    return (
      <SafeAreaView style={styles.container}>
        <Box padding="m">
          <Text variant="header" color="text">
            Exercise not found
          </Text>
        </Box>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Box padding="m">
          <Box
            backgroundColor="primary"
            padding="xl"
            borderRadius="l"
            marginBottom="m"
          >
            <Text variant="header" color="white" marginBottom="s">
              {exercise.title}
            </Text>
            <Text variant="body" color="white">
              {exercise.description}
            </Text>
          </Box>

          <Card variant="elevated" marginBottom="m">
            <Box padding="m">
              <Text variant="title" color="text" marginBottom="s">
                About
              </Text>
              <Text variant="body" color="textSecondary">
                {exercise.longDescription}
              </Text>
            </Box>
          </Card>

          <Card variant="elevated" marginBottom="m">
            <Box padding="m">
              <Text variant="title" color="text" marginBottom="s">
                Instructions
              </Text>
              {exercise.instructions.map((instruction, index) => (
                <Box
                  key={index}
                  flexDirection="row"
                  alignItems="center"
                  marginBottom="s"
                >
                  <Box
                    width={24}
                    height={24}
                    borderRadius="round"
                    backgroundColor="primary"
                    marginRight="s"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Text variant="caption" color="white">
                      {index + 1}
                    </Text>
                  </Box>
                  <Box flex={1}>
                    <Text variant="body" color="textSecondary">
                      {instruction}
                    </Text>
                  </Box>
                </Box>
              ))}
            </Box>
          </Card>

          <Card variant="elevated" marginBottom="m">
            <Box padding="m">
              <Text variant="title" color="text" marginBottom="s">
                Benefits
              </Text>
              {exercise.benefits.map((benefit, index) => (
                <Box
                  key={index}
                  flexDirection="row"
                  alignItems="center"
                  marginBottom="s"
                >
                  <Box
                    width={8}
                    height={8}
                    borderRadius="round"
                    backgroundColor="primary"
                    marginRight="s"
                  />
                  <Text variant="body" color="textSecondary">
                    {benefit}
                  </Text>
                </Box>
              ))}
            </Box>
          </Card>

          <Button
            label="Start Exercise"
            onPress={handleStartExercise}
            variant="primary"
          />
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
}); 