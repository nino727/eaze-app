import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme/theme';
import { Box } from '../../components/Box';
import { Text } from '../../components/Text';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { signIn } from '../../lib/supabase';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

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

        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Input
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          secureTextEntry
        />

        {error && (
          <Box marginBottom="l">
            <Text variant="caption" color="error">
              {error}
            </Text>
          </Box>
        )}

        <Button
          onPress={handleLogin}
          isLoading={isLoading}
          disabled={isLoading}
          size="lg"
        >
          {isLoading ? 'Signing in...' : 'Sign In'}
        </Button>

        <Box flexDirection="row" justifyContent="center" marginTop="l">
          <Text variant="body" color="textSecondary">
            Don't have an account?{' '}
          </Text>
          <Button
            onPress={() => navigation.navigate('SignUp')}
            variant="outline"
            size="sm"
          >
            Sign Up
          </Button>
        </Box>

        <Box marginTop="l" alignItems="center">
          <Button
            onPress={() => navigation.navigate('ForgotPassword')}
            variant="outline"
            size="sm"
          >
            Forgot Password?
          </Button>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}); 