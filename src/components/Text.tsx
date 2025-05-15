import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';
import { useTheme, createText } from '@shopify/restyle';
import { Theme } from '../theme/theme';

const BaseText = createText<Theme>();

interface TextProps extends RNTextProps {
  variant?: keyof Theme['textVariants'];
  color?: keyof Theme['colors'];
  fontWeight?: 'normal' | '600' | 'bold';
  marginBottom?: keyof Theme['spacing'];
  marginRight?: keyof Theme['spacing'];
}

export const Text: React.FC<TextProps> = ({
  variant = 'body',
  color,
  fontWeight,
  marginBottom,
  marginRight,
  style,
  ...props
}) => {
  const theme = useTheme<Theme>();

  return (
    <BaseText
      variant={variant}
      color={color}
      style={[
        style,
        fontWeight && { fontWeight },
        marginBottom && { marginBottom: theme.spacing[marginBottom] },
        marginRight && { marginRight: theme.spacing[marginRight] },
      ]}
      {...props}
    />
  );
}; 