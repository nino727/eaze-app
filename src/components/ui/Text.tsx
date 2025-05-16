import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme';

interface TextProps extends RNTextProps {
  variant?: 'header' | 'subheader' | 'title' | 'body' | 'bodySmall' | 'caption' | 'button';
  color?: keyof Theme['colors'];
}

export const Text = ({ variant = 'body', color = 'text', style, ...props }: TextProps) => {
  const theme = useTheme<Theme>();

  const getFontSize = () => {
    switch (variant) {
      case 'header':
        return 34;
      case 'subheader':
        return 28;
      case 'title':
        return 20;
      case 'body':
        return 17;
      case 'bodySmall':
        return 15;
      case 'caption':
        return 13;
      case 'button':
        return 17;
      default:
        return 17;
    }
  };

  const getFontWeight = () => {
    switch (variant) {
      case 'header':
      case 'subheader':
      case 'title':
      case 'button':
        return '700';
      default:
        return '400';
    }
  };

  return (
    <RNText
      style={[
        {
          fontSize: getFontSize(),
          fontWeight: getFontWeight(),
          color: theme.colors[color],
        },
        style,
      ]}
      {...props}
    />
  );
}; 