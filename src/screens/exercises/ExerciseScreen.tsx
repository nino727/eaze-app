import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme/theme';
import { Box } from '../../components/Box';
import { Text } from '../../components/Text';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Exercise } from '../../types';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export const ExerciseScreen: React.FC = () => {
  const theme = useTheme<Theme>();
  const navigation = useNavigation();
  const route = useRoute();
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [exercise, setExercise] = useState<Exercise | null>(null);

  useEffect(() => {
    // Load exercise data
    const loadExercise = async () => {
      // TODO: Load exercise data from API
      setExercise({
        id: '1',
        title: 'Deep Breathing',
        description: 'A calming breathing exercise to reduce stress',
        duration: 5,
        category: 'breathing',
        difficulty: 'beginner',
        steps: [
          'Find a comfortable position',
          'Breathe in slowly through your nose',
          'Hold for 4 seconds',
          'Exhale slowly through your mouth',
          'Repeat 5 times',
        ],
        benefits: [
          'Reduces stress',
          'Improves focus',
          'Calms the mind',
        ],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
    };

    loadExercise();
  }, []);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const playSound = async () => {
    if (sound) {
      if (isPlaying) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const nextStep = () => {
    if (currentStep < (exercise?.steps.length || 0) - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (!exercise) {
    return (
      <Box flex={1} justifyContent="center" alignItems="center">
        <Text>Loading...</Text>
      </Box>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        padding="m"
        borderBottomWidth={1}
        borderBottomColor="gray200"
      >
        <Button
          onPress={() => navigation.goBack()}
          variant="outline"
          size="sm"
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color={theme.colors.text}
          />
        </Button>
        <Text variant="header" color="text">
          {exercise.title}
        </Text>
        <Box width={24} />
      </Box>

      <Box flex={1} padding="m">
        <Card
          variant="primary"
          title={`Step ${currentStep + 1} of ${exercise.steps.length}`}
          description={exercise.steps[currentStep]}
        />

        <Box flexDirection="row" justifyContent="space-between" marginTop="l">
          <Button
            onPress={previousStep}
            disabled={currentStep === 0}
            variant="outline"
            size="lg"
          >
            <Ionicons
              name="arrow-back"
              size={24}
              color={theme.colors.text}
            />
          </Button>

          <Button
            onPress={playSound}
            variant="primary"
            size="lg"
          >
            <Ionicons
              name={isPlaying ? 'pause' : 'play'}
              size={24}
              color={theme.colors.mainBackground}
            />
          </Button>

          <Button
            onPress={nextStep}
            disabled={currentStep === exercise.steps.length - 1}
            variant="outline"
            size="lg"
          >
            <Ionicons
              name="arrow-forward"
              size={24}
              color={theme.colors.text}
            />
          </Button>
        </Box>

        <Box marginTop="l">
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
                backgroundColor="success"
                marginRight="s"
              />
              <Text variant="body" color="text">
                {benefit}
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}); 