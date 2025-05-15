import React, { useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme/theme';
import { Box } from '../../components/Box';
import { Text } from '../../components/Text';
import { Button } from '../../components/Button';
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
  interpolate,
  useSharedValue,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const onboardingSteps = [
  {
    title: 'Welcome to Eaze',
    description: 'Your personal nervous system regulation companion',
    image: require('../../assets/onboarding-1.png'),
  },
  {
    title: 'Daily Exercises',
    description: 'Access curated exercises to help regulate your nervous system',
    image: require('../../assets/onboarding-2.png'),
  },
  {
    title: 'Track Your Progress',
    description: 'Monitor your journey and celebrate your achievements',
    image: require('../../assets/onboarding-3.png'),
  },
  {
    title: 'Connect with Buddies',
    description: 'Practice together and support each other',
    image: require('../../assets/onboarding-4.png'),
  },
];

export const OnboardingScreen: React.FC = () => {
  const theme = useTheme<Theme>();
  const [currentStep, setCurrentStep] = useState(0);
  const progress = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            progress.value,
            [0, 1],
            [0, -width * (onboardingSteps.length - 1)]
          ),
        },
      ],
    };
  });

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      progress.value = withSpring(currentStep + 1);
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSkip = () => {
    // Navigate to sign up screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <Box flex={1} backgroundColor="background">
        <Animated.View style={[styles.slider, animatedStyle]}>
          {onboardingSteps.map((step, index) => (
            <Box
              key={index}
              width={width}
              height="100%"
              alignItems="center"
              justifyContent="center"
              padding="xl"
            >
              <Box
                width={200}
                height={200}
                marginBottom="xl"
                borderRadius="round"
                backgroundColor="primary"
                style={styles.imageContainer}
              >
                {/* Add your image component here */}
              </Box>
              <Text
                variant="header"
                color="text"
                marginBottom="m"
                textAlign="center"
              >
                {step.title}
              </Text>
              <Text
                variant="body"
                color="textSecondary"
                textAlign="center"
                marginBottom="xl"
              >
                {step.description}
              </Text>
            </Box>
          ))}
        </Animated.View>

        <Box
          flexDirection="row"
          justifyContent="center"
          marginBottom="xl"
          paddingHorizontal="m"
        >
          {onboardingSteps.map((_, index) => (
            <Box
              key={index}
              width={8}
              height={8}
              borderRadius="round"
              backgroundColor={index === currentStep ? 'primary' : 'gray300'}
              marginHorizontal="xs"
            />
          ))}
        </Box>

        <Box paddingHorizontal="m" marginBottom="m">
          <Button
            label={currentStep === onboardingSteps.length - 1 ? "Get Started" : "Next"}
            onPress={handleNext}
            variant="primary"
          />
          {currentStep < onboardingSteps.length - 1 && (
            <Button
              label="Skip"
              onPress={handleSkip}
              variant="secondary"
              marginTop="s"
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
  slider: {
    flex: 1,
    flexDirection: 'row',
  },
  imageContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
}); 