import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { Input } from '../Input';
import { customRender } from '../../../test/setup';

describe('Input Component', () => {
  it('renders correctly with label', () => {
    const { getByText } = customRender(
      <Input
        value=""
        onChangeText={() => {}}
        label="Test Label"
      />
    );
    expect(getByText('Test Label')).toBeTruthy();
  });

  it('handles text input correctly', () => {
    const onChangeText = jest.fn();
    const { getByPlaceholderText } = customRender(
      <Input
        value=""
        onChangeText={onChangeText}
        placeholder="Enter text"
      />
    );

    const input = getByPlaceholderText('Enter text');
    fireEvent.changeText(input, 'test input');
    expect(onChangeText).toHaveBeenCalledWith('test input');
  });

  it('displays error message when provided', () => {
    const { getByText } = customRender(
      <Input
        value=""
        onChangeText={() => {}}
        error="Error message"
      />
    );
    expect(getByText('Error message')).toBeTruthy();
  });

  it('handles secure text entry', () => {
    const { getByPlaceholderText } = customRender(
      <Input
        value=""
        onChangeText={() => {}}
        placeholder="Password"
        secureTextEntry
      />
    );

    const input = getByPlaceholderText('Password');
    expect(input.props.secureTextEntry).toBe(true);
  });
}); 