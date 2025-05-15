import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme/theme';
import { Text } from './Text';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'outline';
  isLoading?: boolean;
  marginBottom?: keyof Theme['spacing'];
  marginTop?: keyof Theme['spacing'];
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  isLoading,
  marginBottom,
  marginTop,
  style,
  disabled,
  ...props
}) => {
  const theme = useTheme<Theme>();

  const getButtonStyle = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: disabled ? theme.colors.gray400 : theme.colors.primary,
        };
      case 'secondary':
        return {
          backgroundColor: disabled ? theme.colors.gray200 : theme.colors.secondary,
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          borderWidth: 1,
          borderColor: disabled ? theme.colors.gray400 : theme.colors.primary,
        };
      default:
        return {};
    }
  };

  const getTextColor = () => {
    switch (variant) {
      case 'primary':
      case 'secondary':
        return 'white';
      case 'outline':
        return disabled ? 'gray400' : 'primary';
      default:
        return 'text';
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        getButtonStyle(),
        marginBottom && { marginBottom: theme.spacing[marginBottom] },
        marginTop && { marginTop: theme.spacing[marginTop] },
        style,
      ]}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color={getTextColor()} />
      ) : (
        <Text
          variant="button"
          color={getTextColor()}
          style={styles.label}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 48,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    textAlign: 'center',
  },
}); 