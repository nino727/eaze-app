import React, { useEffect } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { Box } from '@shopify/restyle';
import { Theme } from '../theme/theme';
import Animated, {
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  useSharedValue,
} from 'react-native-reanimated';

interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  borderRadius?: keyof Theme['borderRadius'];
  style?: ViewStyle;
}

const AnimatedBox = Animated.createAnimatedComponent(Box);

const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = 20,
  borderRadius = 'm',
  style,
}) => {
  const translateX = useSharedValue(-100);

  useEffect(() => {
    translateX.value = withRepeat(
      withSequence(
        withTiming(100, { duration: 1000 }),
        withTiming(-100, { duration: 0 })
      ),
      -1,
      false
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: `${translateX.value}%` }],
  }));

  return (
    <Box
      width={width}
      height={height}
      borderRadius={borderRadius}
      backgroundColor="gray100"
      overflow="hidden"
      style={style}
    >
      <AnimatedBox
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundColor="gray200"
        style={animatedStyle}
      />
    </Box>
  );
};

export default Skeleton; 