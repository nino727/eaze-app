import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme/theme';
import { Box } from '../../components/Box';
import { Text } from '../../components/Text';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Exercise } from '../../types';

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
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back"
            size={24}
            color={theme.colors.text}
          />
        </TouchableOpacity>
        <Text variant="header" color="text">
          {exercise.title}
        </Text>
        <Box width={24} />
      </Box>

      <Box flex={1} padding="m">
        <Box
          backgroundColor="primary"
          borderRadius="l"
          padding="l"
          marginBottom="l"
        >
          <Text variant="title" color="mainBackground" marginBottom="s">
            Step {currentStep + 1} of {exercise.steps.length}
          </Text>
          <Text variant="body" color="mainBackground">
            {exercise.steps[currentStep]}
          </Text>
        </Box>

        <Box flexDirection="row" justifyContent="space-between" marginBottom="l">
          <TouchableOpacity
            onPress={previousStep}
            disabled={currentStep === 0}
            style={[
              styles.button,
              {
                backgroundColor: theme.colors.gray200,
                opacity: currentStep === 0 ? 0.5 : 1,
              },
            ]}
          >
            <Ionicons
              name="arrow-back"
              size={24}
              color={theme.colors.text}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={playSound}
            style={[styles.button, { backgroundColor: theme.colors.primary }]}
          >
            <Ionicons
              name={isPlaying ? 'pause' : 'play'}
              size={24}
              color={theme.colors.mainBackground}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={nextStep}
            disabled={currentStep === exercise.steps.length - 1}
            style={[
              styles.button,
              {
                backgroundColor: theme.colors.gray200,
                opacity: currentStep === exercise.steps.length - 1 ? 0.5 : 1,
              },
            ]}
          >
            <Ionicons
              name="arrow-forward"
              size={24}
              color={theme.colors.text}
            />
          </TouchableOpacity>
        </Box>

        <Box>
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
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 