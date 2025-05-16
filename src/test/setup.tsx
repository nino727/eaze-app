import '@testing-library/jest-native/extend-expect';
import { render, RenderOptions } from '@testing-library/react-native';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from '../theme/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';

// Mock expo-constants
jest.mock('expo-constants', () => ({
  expoConfig: {
    extra: {
      supabaseUrl: 'test-url',
      supabaseAnonKey: 'test-key',
    },
  },
}));

// Mock expo-secure-store
jest.mock('expo-secure-store', () => ({
  getItemAsync: jest.fn(),
  setItemAsync: jest.fn(),
  deleteItemAsync: jest.fn(),
}));

// Custom render function with providers
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>{children}</SafeAreaProvider>
    </ThemeProvider>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything
export * from '@testing-library/react-native';
export { customRender }; 