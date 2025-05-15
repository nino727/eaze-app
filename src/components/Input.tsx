import React from 'react';
import { TextInput, TextInputProps, StyleSheet } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme/theme';
import { Box } from './Box';
import { Text } from './Text';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  marginBottom?: keyof Theme['spacing'];
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  marginBottom,
  style,
  ...props
}) => {
  const theme = useTheme<Theme>();

  return (
    <Box marginBottom={marginBottom}>
      {label && (
        <Text
          variant="bodySmall"
          color="textSecondary"
          marginBottom="xs"
        >
          {label}
        </Text>
      )}
      <TextInput
        style={[
          styles.input,
          {
            color: theme.colors.text,
            borderColor: error ? theme.colors.error : theme.colors.border,
            backgroundColor: theme.colors.cardBackground,
          },
          style,
        ]}
        placeholderTextColor={theme.colors.textSecondary}
        {...props}
      />
      {error && (
        <Text
          variant="caption"
          color="error"
          marginTop="xs"
        >
          {error}
        </Text>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
  },
}); 