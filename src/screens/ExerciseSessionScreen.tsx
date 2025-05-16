import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme';
import { Text } from '../components/ui/Text';
import { Button } from '../components/ui/Button';
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
  withRepeat,
  withSequence,
  useSharedValue,
  interpolate,
  Easing,
} from 'react-native-reanimated';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import * as Haptics from 'expo-haptics';
import { useStore } from '../store';

const { width } = Dimensions.get('window');

export const ExerciseSessionScreen = () => {
  const theme = useTheme<Theme>();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute();
  const exerciseId = (route.params as { id: string })?.id;
  const { addExerciseHistory } = useStore();

  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [progress, setProgress] = useState(0);

  const progressValue = useSharedValue(0);
  const scaleValue = useSharedValue(1);
  const breathValue = useSharedValue(0);

  useEffect(() => {
    if (isPlaying && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining((prev) => {
          const newTime = prev - 1;
          const newProgress = 1 - newTime / 60;
          progressValue.value = withSpring(newProgress);
          return newTime;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isPlaying, timeRemaining]);

  useEffect(() => {
    if (isPlaying) {
      breathValue.value = withRepeat(
        withSequence(
          withTiming(1, { duration: 4000, easing: Easing.inOut(Easing.ease) }),
          withTiming(0, { duration: 4000, easing: Easing.inOut(Easing.ease) })
        ),
        -1,
        true
      );
    } else {
      breathValue.value = withTiming(0);
    }
  }, [isPlaying]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: interpolate(progressValue.value, [0, 1], [1, 1.2]) },
      ],
      opacity: interpolate(progressValue.value, [0, 1], [0.8, 1]),
    };
  });

  const breathStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: interpolate(breathValue.value, [0, 1], [1, 1.5]) },
      ],
      opacity: interpolate(breathValue.value, [0, 1], [0.5, 1]),
    };
  });

  const handleStart = () => {
    setIsPlaying(true);
    setTimeRemaining(60);
    scaleValue.value = withSpring(1.1);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  const handlePause = () => {
    setIsPlaying(false);
    scaleValue.value = withSpring(1);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const handleNext = () => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
      setTimeRemaining(60);
      progressValue.value = withSpring(0);
    } else {
      // Complete the exercise
      addExerciseHistory({
        id: Date.now().toString(),
        exerciseId,
        completedAt: new Date().toISOString(),
        duration: 240, // 4 minutes total
        rating: 5,
      });
      navigation.navigate('ExerciseDetail', { id: exerciseId });
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Animated.View style={[styles.content, animatedStyle]}>
        <Text variant="header" style={styles.title}>
          Step {currentStep + 1}
        </Text>
        
        <Animated.View style={[styles.breathCircle, breathStyle]}>
          <Text variant="body" style={styles.breathText}>
            {isPlaying ? 'Breathe' : 'Ready'}
          </Text>
        </Animated.View>

        <View style={styles.progressContainer}>
          <Animated.View
            style={[
              styles.progressBar,
              {
                width: `${progress * 100}%`,
                backgroundColor: theme.colors.primary,
              },
            ]}
          />
        </View>

        <Text variant="body" style={styles.timer}>
          {timeRemaining}s
        </Text>

        <View style={styles.buttonContainer}>
          {!isPlaying ? (
            <Button
              variant="primary"
              size="lg"
              onPress={handleStart}
              label="Start"
            />
          ) : (
            <Button
              variant="secondary"
              size="lg"
              onPress={handlePause}
              label="Pause"
            />
          )}
          
          <Button
            variant="outline"
            size="lg"
            onPress={handleNext}
            label={currentStep === 3 ? "Complete" : "Next Step"}
          />
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: width * 0.9,
    alignItems: 'center',
  },
  title: {
    marginBottom: 24,
  },
  breathCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  breathText: {
    fontSize: 24,
    fontWeight: '600',
  },
  progressContainer: {
    width: '100%',
    height: 8,
    backgroundColor: '#E5E5EA',
    borderRadius: 4,
    marginBottom: 24,
  },
  progressBar: {
    height: '100%',
    borderRadius: 4,
  },
  timer: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  buttonContainer: {
    width: '100%',
    gap: 16,
  },
}); 