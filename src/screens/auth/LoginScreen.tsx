import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme/theme';
import { Box } from '../../components/Box';
import { Text } from '../../components/Text';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { signIn } from '../../lib/supabase';

export const LoginScreen: React.FC = () => {
  const theme = useTheme<Theme>();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      setError(null);
      await signIn(email, password);
      navigation.navigate('Main' as never);
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
            Welcome Back
          </Text>
          <Text variant="body" color="textSecondary">
            Sign in to continue your journey
          </Text>
        </Box>

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
            placeholder="Password"
            placeholderTextColor={theme.colors.gray400}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
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
          onPress={handleLogin}
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
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Text>
        </TouchableOpacity>

        <Box flexDirection="row" justifyContent="center" marginTop="l">
          <Text variant="body" color="textSecondary">
            Don't have an account?{' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text variant="body" color="primary">
              Sign Up
            </Text>
          </TouchableOpacity>
        </Box>

        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPassword')}
          style={styles.forgotPassword}
        >
          <Text variant="body" color="primary">
            Forgot Password?
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
  forgotPassword: {
    alignItems: 'center',
    marginTop: 16,
  },
}); 