import React from 'react';
import { View, Text } from 'react-native';
import { fireEvent } from '@testing-library/react-native';
import { SectionErrorBoundary } from '../SectionErrorBoundary';
import { customRender } from '../../test/setup';

const ThrowError = () => {
  throw new Error('Test error');
};

describe('SectionErrorBoundary Component', () => {
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders children when there is no error', () => {
    const { getByText } = customRender(
      <SectionErrorBoundary sectionName="Test Section">
        <View>
          <Text>Test content</Text>
        </View>
      </SectionErrorBoundary>
    );
    expect(getByText('Test content')).toBeTruthy();
  });

  it('renders error UI with section name when there is an error', () => {
    const { getByText } = customRender(
      <SectionErrorBoundary sectionName="Test Section">
        <ThrowError />
      </SectionErrorBoundary>
    );
    expect(getByText('Error in Test Section')).toBeTruthy();
  });

  it('calls onRetry when retry button is pressed', () => {
    const onRetry = jest.fn();
    const { getByText } = customRender(
      <SectionErrorBoundary sectionName="Test Section" onRetry={onRetry}>
        <ThrowError />
      </SectionErrorBoundary>
    );

    const retryButton = getByText('Try Again');
    fireEvent.press(retryButton);
    expect(onRetry).toHaveBeenCalled();
  });

  it('logs error to console with section name', () => {
    customRender(
      <SectionErrorBoundary sectionName="Test Section">
        <ThrowError />
      </SectionErrorBoundary>
    );
    expect(console.error).toHaveBeenCalledWith(
      expect.stringContaining('Test Section'),
      expect.any(Error),
      expect.any(Object)
    );
  });
}); 