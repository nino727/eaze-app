import React, { Suspense } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '@shopify/restyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { theme } from './src/theme/theme';
import { Navigation } from './src/navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ErrorBoundary } from './src/components/ErrorBoundary';
import { ActivityIndicator, View } from 'react-native';

const LoadingFallback = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ActivityIndicator size="large" />
  </View>
);

export default function App() {
  return (
    <ErrorBoundary>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider theme={theme}>
          <SafeAreaProvider>
            <Suspense fallback={<LoadingFallback />}>
              <Navigation />
              <StatusBar style="auto" />
            </Suspense>
          </SafeAreaProvider>
        </ThemeProvider>
      </GestureHandlerRootView>
    </ErrorBoundary>
  );
} 