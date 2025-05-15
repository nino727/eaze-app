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

export const SignUpScreen: React.FC = () => {
  const theme = useTheme<Theme>();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [selectedTier, setSelectedTier] = useState<'free' | 'premium'>('free');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async () => {
    setIsLoading(true);
    try {
      // Implement sign up logic with Supabase
      // Send verification email
      // Create user profile
      // Navigate to verification screen
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
            Create Account
          </Text>
          <Text variant="body" color="textSecondary" marginBottom="xl">
            Join Eaze and start your journey to better nervous system regulation
          </Text>

          <Card variant="elevated" marginBottom="m">
            <Input
              label="Full Name"
              value={name}
              onChangeText={setName}
              placeholder="Enter your name"
              autoCapitalize="words"
            />
          </Card>

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
              placeholder="Create a password"
              secureTextEntry
            />
          </Card>

          <Text variant="title" color="text" marginBottom="m">
            Choose Your Plan
          </Text>

          <Box flexDirection="row" marginBottom="xl">
            <Card
              variant={selectedTier === 'free' ? 'elevated' : 'default'}
              style={styles.planCard}
              onPress={() => setSelectedTier('free')}
            >
              <Text variant="title" color="text" marginBottom="s">
                Free
              </Text>
              <Text variant="body" color="textSecondary" marginBottom="m">
                • 2 daily exercises{'\n'}
                • Basic tracking{'\n'}
                • Community access
              </Text>
              <Text variant="header" color="primary">
                $0
              </Text>
            </Card>

            <Card
              variant={selectedTier === 'premium' ? 'elevated' : 'default'}
              style={styles.planCard}
              onPress={() => setSelectedTier('premium')}
            >
              <Text variant="title" color="text" marginBottom="s">
                Premium
              </Text>
              <Text variant="body" color="textSecondary" marginBottom="m">
                • All exercises{'\n'}
                • Advanced tracking{'\n'}
                • Buddy system{'\n'}
                • Premium content
              </Text>
              <Text variant="header" color="primary">
                $9.99/mo
              </Text>
            </Card>
          </Box>

          <Button
            label="Create Account"
            onPress={handleSignUp}
            variant="primary"
            isLoading={isLoading}
          />

          <Box flexDirection="row" justifyContent="center" marginTop="m">
            <Text variant="body" color="textSecondary">
              Already have an account?{' '}
            </Text>
            <Text
              variant="body"
              color="primary"
              onPress={() => navigation.navigate('SignIn')}
            >
              Sign In
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
  planCard: {
    flex: 1,
    marginHorizontal: 4,
  },
}); 