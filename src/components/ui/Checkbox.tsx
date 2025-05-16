import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme/theme';
import { Box } from '../Box';
import { Text } from '../Text';
import { Ionicons } from '@expo/vector-icons';

interface CheckboxProps {
  checked: boolean;
  onValueChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onValueChange,
  label,
  disabled = false,
}) => {
  const theme = useTheme<Theme>();

  return (
    <TouchableOpacity
      onPress={() => !disabled && onValueChange(!checked)}
      disabled={disabled}
      style={styles.container}
    >
      <Box
        style={[
          styles.checkbox,
          {
            backgroundColor: checked ? theme.colors.primary : 'transparent',
            borderColor: checked ? theme.colors.primary : theme.colors.gray300,
            opacity: disabled ? 0.5 : 1,
          },
        ]}
      >
        {checked && (
          <Ionicons
            name="checkmark"
            size={16}
            color={theme.colors.mainBackground}
          />
        )}
      </Box>
      {label && (
        <Text
          variant="body"
          color={disabled ? 'textSecondary' : 'text'}
          style={styles.label}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginLeft: 8,
  },
}); 