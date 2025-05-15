import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme/theme';
import { Box } from '../../components/Box';
import { Text } from '../../components/Text';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { resetPassword } from '../../lib/supabase';

export const ForgotPasswordScreen: React.FC = () => {
  const theme = useTheme<Theme>();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleResetPassword = async () => {
    try {
      setIsLoading(true);
      setError(null);
      await resetPassword(email);
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Box flex={1} padding="l">
        <Box marginBottom="xl">
          <Text variant="header" color="text" marginBottom="s">
            Reset Password
          </Text>
          <Text variant="body" color="textSecondary">
            Enter your email to receive reset instructions
          </Text>
        </Box>

        {!success ? (
          <>
            <Box marginBottom="l">
              <TextInput
                style={[
                  styles.input,
                  {
                    backgroundColor: theme.colors.gray100,
                    color: theme.colors.text,
                    borderColor: theme.colors.gray200,
                  },
                ]}
                placeholder="Email"
                placeholderTextColor={theme.colors.gray400}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
              />
            </Box>

            {error && (
              <Box marginBottom="l">
                <Text variant="caption" color="error">
                  {error}
                </Text>
              </Box>
            )}

            <TouchableOpacity
              onPress={handleResetPassword}
              disabled={isLoading}
              style={[
                styles.button,
                {
                  backgroundColor: theme.colors.primary,
                  opacity: isLoading ? 0.7 : 1,
                },
              ]}
            >
              <Text variant="body" color="mainBackground">
                {isLoading ? 'Sending...' : 'Send Reset Link'}
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          <Box
            backgroundColor="success"
            borderRadius="m"
            padding="l"
            marginBottom="l"
          >
            <Text variant="body" color="mainBackground">
              Reset instructions have been sent to your email.
            </Text>
          </Box>
        )}

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text variant="body" color="primary">
            Back to Login
          </Text>
        </TouchableOpacity>
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 50,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 16,
    fontSize: 16,
  },
  button: {
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    alignItems: 'center',
    marginTop: 16,
  },
}); 