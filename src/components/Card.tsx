import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme/theme';
import { Box } from './Box';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated';
  marginBottom?: keyof Theme['spacing'];
  padding?: keyof Theme['spacing'];
  backgroundColor?: keyof Theme['colors'];
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  marginBottom,
  padding = 'm',
  backgroundColor = 'cardBackground',
}) => {
  const theme = useTheme<Theme>();

  return (
    <Box
      backgroundColor={backgroundColor}
      borderRadius="m"
      padding={padding}
      marginBottom={marginBottom}
      style={[
        styles.container,
        variant === 'elevated' && {
          shadowColor: theme.colors.black,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 3,
        },
      ]}
    >
      {children}
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'transparent',
  },
}); 