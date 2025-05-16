import React from 'react';
import { View } from 'react-native';
import { Text } from './Text';
import { Box } from './Box';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can log the error to an error reporting service here
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box flex={1} justifyContent="center" alignItems="center" padding="l">
          <Text variant="heading" color="error" marginBottom="m">
            Something went wrong
          </Text>
          <Text variant="body" color="textSecondary">
            {this.state.error?.message || 'An unexpected error occurred'}
          </Text>
        </Box>
      );
    }

    return this.props.children;
  }
} 