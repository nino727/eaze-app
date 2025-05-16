import React, { useCallback, useMemo } from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme/theme';
import { Text } from '../Text';
import { Box } from '../Box';
import { withPerformance } from '../withPerformance';
import { performanceMonitor } from '../../utils/performance';

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  onFocus?: () => void;
  onBlur?: () => void;
}

const InputComponent: React.FC<InputProps> = ({
  value,
  onChangeText,
  placeholder,
  label,
  error,
  secureTextEntry,
  autoCapitalize = 'none',
  keyboardType = 'default',
  onFocus,
  onBlur,
}) => {
  const theme = useTheme<Theme>();

  const handleChangeText = useCallback((text: string) => {
    performanceMonitor.startMeasure('input-change');
    onChangeText(text);
    performanceMonitor.endMeasure('input-change');
  }, [onChangeText]);

  const handleFocus = useCallback(() => {
    performanceMonitor.startMeasure('input-focus');
    onFocus?.();
    performanceMonitor.endMeasure('input-focus');
  }, [onFocus]);

  const handleBlur = useCallback(() => {
    performanceMonitor.startMeasure('input-blur');
    onBlur?.();
    performanceMonitor.endMeasure('input-blur');
  }, [onBlur]);

  const inputStyle = useMemo(() => [
    styles.input,
    {
      backgroundColor: theme.colors.mainBackground,
      color: theme.colors.text,
      borderColor: error ? theme.colors.error : theme.colors.cardPrimaryBackground,
    },
  ], [theme.colors, error]);

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
        style={inputStyle}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.textSecondary}
        value={value}
        onChangeText={handleChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
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

export const Input = withPerformance(InputComponent, 'Input'); 