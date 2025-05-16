import React from 'react';
import { View, Text } from 'react-native';
import { ErrorBoundary } from '../ErrorBoundary';
import { customRender } from '../../test/setup';

const ThrowError = () => {
  throw new Error('Test error');
};

describe('ErrorBoundary Component', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders children when there is no error', () => {
    const { getByText } = customRender(
      <ErrorBoundary>
        <View>
          <Text>Test content</Text>
        </View>
      </ErrorBoundary>
    );
    expect(getByText('Test content')).toBeTruthy();
  });

  it('renders error UI when there is an error', () => {
    const { getByText } = customRender(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );
    expect(getByText('Something went wrong')).toBeTruthy();
  });

  it('logs error to console', () => {
    customRender(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );
    expect(console.error).toHaveBeenCalled();
  });
}); 