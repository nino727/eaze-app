import React, { useEffect, useRef } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import LottieView, { AnimationObject } from 'lottie-react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme/theme';

interface LottieAnimationProps {
  source: string | AnimationObject | { uri: string };
  style?: StyleProp<ViewStyle>;
  autoPlay?: boolean;
  loop?: boolean;
  speed?: number;
  onAnimationFinish?: () => void;
  colorFilters?: Array<{
    keypath: string;
    color: string;
  }>;
}

export const LottieAnimation: React.FC<LottieAnimationProps> = ({
  source,
  style,
  autoPlay = true,
  loop = true,
  speed = 1,
  onAnimationFinish,
  colorFilters,
}) => {
  const animationRef = useRef<LottieView>(null);
  const theme = useTheme<Theme>();

  useEffect(() => {
    if (autoPlay && animationRef.current) {
      animationRef.current.play();
    }
  }, [autoPlay]);

  return (
    <LottieView
      ref={animationRef}
      source={source}
      style={style}
      autoPlay={autoPlay}
      loop={loop}
      speed={speed}
      onAnimationFinish={onAnimationFinish}
      colorFilters={colorFilters}
    />
  );
}; 