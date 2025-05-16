import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../components/ui/Text';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme';
import { SafeAreaView } from 'react-native-safe-area-context';

export function SubscriptionScreen() {
  const theme = useTheme<Theme>();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.content}>
        <Text variant="header">Subscription</Text>
        <Text variant="body">Manage your subscription here.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
  },
}); 