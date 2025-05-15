import React, { useState, useEffect } from 'react';
import { StyleSheet, Animated, Easing } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme/theme';
import { Box } from '../../components/Box';
import { Text } from '../../components/Text';
import { Button } from '../../components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import { mockExercises } from '../../data/mockExercises';
import { ProgressBar } from '../../components/ProgressBar';

type ExerciseSessionScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ExerciseSession'>;
type ExerciseSessionScreenRouteProp = RouteProp<RootStackParamList, 'ExerciseSession'>;

export const ExerciseSessionScreen: React.FC = () => {
  const theme = useTheme<Theme>();
  const navigation = useNavigation<ExerciseSessionScreenNavigationProp>();
  const route = useRoute<ExerciseSessionScreenRouteProp>();
  const { id } = route.params;

  const [currentStep, setCurrentStep] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [progress, setProgress] = useState(0);

  const exercise = mockExercises.find((ex) => ex.id === id);
  const animation = new Animated.Value(0);

  useEffect(() => {
    if (isActive && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining((prev) => {
          const newTime = prev - 1;
          setProgress((exercise.duration - newTime) / exercise.duration);
          return newTime;
        });
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeRemaining === 0 && isActive) {
      handleNextStep();
    }
  }, [isActive, timeRemaining]);

  useEffect(() => {
    if (isActive) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(animation, {
            toValue: 1,
            duration: 2000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(animation, {
            toValue: 0,
            duration: 2000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ])
      ).start();
    } else {
      animation.setValue(0);
    }
  }, [isActive]);

  const handleStart = () => {
    setIsActive(true);
    setTimeRemaining(exercise.duration * 60);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleNextStep = () => {
    if (currentStep < exercise.instructions.length - 1) {
      setCurrentStep((prev) => prev + 1);
      setTimeRemaining(exercise.duration * 60);
      setIsActive(false);
    } else {
      navigation.navigate('ExerciseDetail', { id });
    }
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

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.2],
  });

  return (
    <SafeAreaView style={styles.container}>
      <Box padding="m" flex={1}>
        <Box flex={1} justifyContent="center" alignItems="center">
          <Animated.View
            style={[
              styles.animationContainer,
              {
                transform: [{ scale }],
                backgroundColor: exercise.color,
              },
            ]}
          >
            <Text variant="header" color="white">
              {exercise.icon}
            </Text>
          </Animated.View>

          <Box marginTop="xl" alignItems="center">
            <Text variant="header" color="text" marginBottom="s">
              {exercise.instructions[currentStep]}
            </Text>
            <Text variant="body" color="textSecondary">
              {formatTime(timeRemaining)}
            </Text>
          </Box>

          <Box marginTop="xl" width="100%">
            <ProgressBar progress={progress} />
          </Box>
        </Box>

        <Box marginTop="xl">
          {!isActive ? (
            <Button
              label={currentStep === 0 ? 'Start Exercise' : 'Continue'}
              onPress={handleStart}
              variant="primary"
            />
          ) : (
            <Button
              label="Pause"
              onPress={handlePause}
              variant="secondary"
            />
          )}
        </Box>
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  animationContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
}); 