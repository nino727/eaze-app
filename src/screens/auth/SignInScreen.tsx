import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme/theme';
import { Box } from '../../components/Box';
import { Text } from '../../components/Text';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Card } from '../../components/Card';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/types';

type SignInScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'SignIn'>;

export const SignInScreen: React.FC = () => {
  const theme = useTheme<Theme>();
  const navigation = useNavigation<SignInScreenNavigationProp>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      // Implement sign in logic with Supabase
      // Navigate to main app
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Box padding="m">
          <Text variant="header" color="text" marginBottom="m">
            Welcome Back
          </Text>
          <Text variant="body" color="textSecondary" marginBottom="xl">
            Sign in to continue your journey
          </Text>

          <Card variant="elevated" marginBottom="m">
            <Input
              label="Email"
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </Card>

          <Card variant="elevated" marginBottom="xl">
            <Input
              label="Password"
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              secureTextEntry
            />
          </Card>

          <Button
            label="Sign In"
            onPress={handleSignIn}
            variant="primary"
            isLoading={isLoading}
          />

          <Box flexDirection="row" justifyContent="center" marginTop="m">
            <Text variant="body" color="textSecondary">
              Don't have an account?{' '}
            </Text>
            <Text
              variant="body"
              color="primary"
              onPress={() => navigation.navigate('SignUp')}
            >
              Sign Up
            </Text>
          </Box>

          <Box flexDirection="row" justifyContent="center" marginTop="s">
            <Text
              variant="body"
              color="primary"
              onPress={() => navigation.navigate('ForgotPassword')}
            >
              Forgot Password?
            </Text>
          </Box>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
}); 