import React from 'react';
import { View } from 'react-native';
import { Text } from '../components/ui/Text';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme';

export const ExerciseHistoryScreen = () => {
  const theme = useTheme<Theme>();

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Text variant="heading">Exercise History</Text>
    </View>
  );
}; 