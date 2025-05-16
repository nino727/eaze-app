import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme/theme';
import { Text } from '../Text';
import { Box } from '../Box';

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
}

export const Input: React.FC<InputProps> = ({
  value,
  onChangeText,
  placeholder,
  label,
  error,
  secureTextEntry,
  autoCapitalize = 'none',
  keyboardType = 'default',
}) => {
  const theme = useTheme<Theme>();

  return (
    <Box marginBottom="m">
      {label && (
        <Box marginBottom="xs">
          <Text
            variant="caption"
            color="textSecondary"
          >
            {label}
          </Text>
        </Box>
      )}
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: theme.colors.gray100,
            color: theme.colors.text,
            borderColor: error ? theme.colors.error : theme.colors.gray200,
          },
        ]}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.gray400}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
      />
      {error && (
        <Box marginTop="xs">
          <Text
            variant="caption"
            color="error"
          >
            {error}
          </Text>
        </Box>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 16,
    fontSize: 16,
  },
}); 