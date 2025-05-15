import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme/theme';
import { LottieAnimation } from './LottieAnimation';

interface AnimatedIconProps {
  source: string | { uri: string };
  isActive?: boolean;
  style?: StyleProp<ViewStyle>;
  size?: number;
}

export const AnimatedIcon: React.FC<AnimatedIconProps> = ({
  source,
  isActive = false,
  style,
  size = 24,
}) => {
  const theme = useTheme<Theme>();

  return (
    <LottieAnimation
      source={source}
      style={[
        {
          width: size,
          height: size,
        },
        style,
      ]}
      autoPlay={isActive}
      loop={isActive}
      speed={1}
      colorFilters={[
        {
          keypath: 'Color',
          color: isActive ? theme.colors.primary : theme.colors.gray500,
        },
      ]}
    />
  );
}; 