import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createBox, createText, useTheme } from '@shopify/restyle';
import { Theme } from '../theme/theme';
import { useSafeArea } from '../hooks/useSafeArea';

const Box = createBox<Theme>();
const Text = createText<Theme>();

interface HeaderProps {
  title: string;
  showBack?: boolean;
  onBackPress?: () => void;
}

export function Header({ title, showBack, onBackPress }: HeaderProps) {
  const theme = useTheme<Theme>();
  const { getSafeAreaStyle } = useSafeArea();

  return (
    <Box
      backgroundColor="background"
      paddingHorizontal="m"
      paddingVertical="s"
      style={getSafeAreaStyle()}
    >
      <Box flexDirection="row" alignItems="center">
        {showBack && (
          <TouchableOpacity
            onPress={onBackPress}
            style={{ marginRight: theme.spacing.m }}
          >
            <Text variant="body" color="primary">
              ←
            </Text>
          </TouchableOpacity>
        )}
        <Text variant="subheader">{title}</Text>
      </Box>
    </Box>
  );
} 