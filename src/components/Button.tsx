import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme';
import { Text } from './Text';
import { Box } from './Box';

export interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  size = 'medium',
  onPress,
  disabled = false,
  loading = false,
  fullWidth = false,
}) => {
  const theme = useTheme<Theme>();

  const getBackgroundColor = (): keyof Theme['colors'] => {
    if (disabled) return 'gray300';
    if (variant === 'primary') return 'primary';
    if (variant === 'secondary') return 'secondary';
    return 'background';
  };

  const getTextColor = (): keyof Theme['colors'] => {
    if (disabled) return 'gray600';
    if (variant === 'outline') return 'primary';
    return 'background';
  };

  const getBorderColor = (): keyof Theme['colors'] => {
    if (disabled) return 'gray300';
    if (variant === 'outline') return 'primary';
    return 'background';
  };

  const getPadding = () => {
    if (size === 'small') return theme.spacing.s;
    if (size === 'large') return theme.spacing.l;
    return theme.spacing.m;
  };

  const styles = StyleSheet.create({
    button: {
      backgroundColor: theme.colors[getBackgroundColor()],
      borderWidth: variant === 'outline' ? 1 : 0,
      borderColor: theme.colors[getBorderColor()],
      borderRadius: theme.borderRadii.m,
      padding: getPadding(),
      alignItems: 'center',
      justifyContent: 'center',
      width: fullWidth ? '100%' : 'auto',
      flexDirection: 'row',
    },
    text: {
      marginRight: loading ? theme.spacing.s : 0,
    },
  });

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      <Text
        variant="button"
        color={getTextColor()}
        style={styles.text}
      >
        {label}
      </Text>
      {loading && (
        <ActivityIndicator
          size="small"
          color={theme.colors[getTextColor()]}
        />
      )}
    </TouchableOpacity>
  );
}; 