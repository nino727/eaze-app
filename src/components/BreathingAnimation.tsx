import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Box } from './Box';
import { Theme } from '../theme/theme';
import Animated, {
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  withDelay,
  useSharedValue,
  Easing,
} from 'react-native-reanimated';

interface BreathingAnimationProps {
  color?: keyof Theme['colors'];
  size?: number;
  duration?: number;
  isActive?: boolean;
}

const AnimatedBox = Animated.createAnimatedComponent(Box);

export const BreathingAnimation: React.FC<BreathingAnimationProps> = ({
  color = 'primary',
  size = 200,
  duration = 4000,
  isActive = true,
}) => {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(0.6);

  useEffect(() => {
    if (isActive) {
      // Inhale
      scale.value = withRepeat(
        withSequence(
          withTiming(1.2, {
            duration: duration / 2,
            easing: Easing.bezier(0.4, 0, 0.2, 1),
          }),
          // Hold
          withDelay(
            duration / 4,
            withTiming(1.2, {
              duration: duration / 4,
              easing: Easing.bezier(0.4, 0, 0.2, 1),
            })
          ),
          // Exhale
          withTiming(1, {
            duration: duration / 2,
            easing: Easing.bezier(0.4, 0, 0.2, 1),
          }),
          // Hold
          withDelay(
            duration / 4,
            withTiming(1, {
              duration: duration / 4,
              easing: Easing.bezier(0.4, 0, 0.2, 1),
            })
          )
        ),
        -1,
        true
      );

      opacity.value = withRepeat(
        withSequence(
          withTiming(1, {
            duration: duration / 2,
            easing: Easing.bezier(0.4, 0, 0.2, 1),
          }),
          withTiming(0.6, {
            duration: duration / 2,
            easing: Easing.bezier(0.4, 0, 0.2, 1),
          })
        ),
        -1,
        true
      );
    } else {
      scale.value = withTiming(1);
      opacity.value = withTiming(0.6);
    }
  }, [isActive, duration]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: opacity.value,
  }));

  return (
    <Box
      width={size}
      height={size}
      alignItems="center"
      justifyContent="center"
    >
      <AnimatedBox
        width={size}
        height={size}
        borderRadius="round"
        backgroundColor={color}
        style={animatedStyle}
      />
    </Box>
  );
}; 