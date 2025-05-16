import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme/theme';
import { Box } from '../Box';
import { Text } from '../Text';

interface CardProps {
  title: string;
  description?: string;
  onPress?: () => void;
  children?: React.ReactNode;
  variant?: 'default' | 'primary';
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  onPress,
  children,
  variant = 'default',
}: CardProps) => {
  const theme = useTheme<Theme>();

  const getBackgroundColor = () => {
    switch (variant) {
      case 'primary':
        return theme.colors.primary;
      default:
        return theme.colors.mainBackground;
    }
  };

  const getTextColor = () => {
    switch (variant) {
      case 'primary':
        return theme.colors.mainBackground;
      default:
        return theme.colors.text;
    }
  };

  const Container: React.ElementType = onPress ? TouchableOpacity : Box;

  return (
    <Container
      onPress={onPress}
      style={[
        styles.container,
        {
          backgroundColor: getBackgroundColor(),
          borderColor: theme.colors.gray200,
        },
      ]}
    >
      <Box padding="m">
        <Text
          variant="header"
          color={variant === 'primary' ? 'background' : 'text'}
          marginBottom={description ? 'xs' : undefined}
        >
          {title}
        </Text>
        {description && (
          <Text
            variant="body"
            color={variant === 'primary' ? 'background' : 'textSecondary'}
          >
            {description}
          </Text>
        )}
        {children}
      </Box>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    borderWidth: 1,
    overflow: 'hidden',
  },
}); 