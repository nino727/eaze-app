import React, { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme/theme';
import { useSafeArea } from 'react-native-safe-area-context';
import { Box } from '../components/Box';
import { Text } from '../components/Text';
import { Header } from '../components/Header';
import { useNavigationContext } from '../navigation/NavigationContext';
import { Exercise } from '../types';
import Animated, {
  useAnimatedStyle,
  withSpring,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

interface ExerciseScreenProps {
  exercise: Exercise;
}

export function ExerciseScreen({ exercise }: ExerciseScreenProps) {
  const theme = useTheme<Theme>();
  const insets = useSafeArea();
  const { goBack } = useNavigationContext();
  const [isPlaying, setIsPlaying] = useState(false);

  const buttonScale = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withSpring(isPlaying ? 1.1 : 1, {
          damping: 10,
          stiffness: 100,
        }),
      },
    ],
  }));

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: theme.colors.background }}
      contentContainerStyle={{ paddingBottom: insets.bottom }}
    >
      <Header
        title={exercise.title}
        showBack
        onBackPress={goBack}
      />
      
      <Box padding="m">
        <Box
          borderRadius="l"
          padding="l"
          marginBottom="l"
          style={{ backgroundColor: exercise.color }}
        >
          <Text variant="header" color="background" marginBottom="s">
            {exercise.title}
          </Text>
          <Text variant="body" color="background" opacity={0.8}>
            {exercise.description}
          </Text>
        </Box>

        <Box marginBottom="l">
          <Text variant="subheader" marginBottom="s">
            Instructions
          </Text>
          <Text variant="body" color="gray600">
            {exercise.instructions}
          </Text>
        </Box>

        <Box marginBottom="l">
          <Text variant="subheader" marginBottom="s">
            Benefits
          </Text>
          <Text variant="body" color="gray600">
            {exercise.benefits}
          </Text>
        </Box>

        <Box
          position="absolute"
          bottom={insets.bottom + theme.spacing.m}
          left={theme.spacing.m}
          right={theme.spacing.m}
        >
          <TouchableOpacity
            onPress={handlePlayPause}
            style={{
              backgroundColor: exercise.color,
              borderRadius: theme.borderRadii.l,
              padding: theme.spacing.l,
              alignItems: 'center',
            }}
          >
            <Animated.View style={buttonScale}>
              <Text variant="header" color="background">
                {isPlaying ? 'Pause' : 'Start'} Exercise
              </Text>
            </Animated.View>
          </TouchableOpacity>
        </Box>
      </Box>
    </ScrollView>
  );
} 