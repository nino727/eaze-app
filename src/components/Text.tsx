import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme';

export interface TextProps extends RNTextProps {
  variant?: keyof Theme['textVariants'];
  color?: keyof Theme['colors'];
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  marginBottom?: keyof Theme['spacing'];
  marginTop?: keyof Theme['spacing'];
  marginLeft?: keyof Theme['spacing'];
  marginRight?: keyof Theme['spacing'];
  opacity?: number;
}

export const Text: React.FC<TextProps> = ({
  variant = 'body',
  color = 'text',
  textAlign,
  marginBottom,
  marginTop,
  marginLeft,
  marginRight,
  opacity,
  style,
  ...props
}) => {
  const theme = useTheme<Theme>();

  const styles = StyleSheet.create({
    text: {
      ...theme.textVariants[variant],
      color: theme.colors[color],
      textAlign,
      marginBottom: marginBottom ? theme.spacing[marginBottom] : undefined,
      marginTop: marginTop ? theme.spacing[marginTop] : undefined,
      marginLeft: marginLeft ? theme.spacing[marginLeft] : undefined,
      marginRight: marginRight ? theme.spacing[marginRight] : undefined,
      opacity,
    },
  });

  return <RNText style={[styles.text, style]} {...props} />;
}; 