import React, { ReactNode, ErrorInfo } from 'react';
import { Box } from './Box';
import { Text } from './Text';
import { Button } from './Button';

interface Props {
  children: ReactNode;
  sectionName: string;
  onRetry?: () => void;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class SectionErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // eslint-disable-next-line no-console
    console.error(`Error in ${this.props.sectionName}:`, error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
    this.props.onRetry?.();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box
          flex={1}
          justifyContent="center"
          alignItems="center"
          padding="l"
          backgroundColor="background"
        >
          <Text
            variant="header"
            color="error"
            marginBottom="m"
          >
            Error in {this.props.sectionName}
          </Text>
          <Text
            variant="body"
            color="textSecondary"
            marginBottom="l"
            textAlign="center"
          >
            {this.state.error?.message || 'An unexpected error occurred'}
          </Text>
          <Button
            label="Try Again"
            onPress={this.handleRetry}
            variant="primary"
          />
        </Box>
      );
    }

    return this.props.children;
  }
} 