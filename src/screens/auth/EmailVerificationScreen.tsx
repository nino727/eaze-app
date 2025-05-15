import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme/theme';
import { Box } from '../../components/Box';
import { Text } from '../../components/Text';
import { Button } from '../../components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';
import { AuthStackParamList } from '../../navigation/types';
import Animated, {
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  useSharedValue,
  Easing,
} from 'react-native-reanimated';

type EmailVerificationScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  'EmailVerification'
>;

type EmailVerificationScreenRouteProp = RouteProp<
  AuthStackParamList,
  'EmailVerification'
>;

export const EmailVerificationScreen: React.FC = () => {
  const theme = useTheme<Theme>();
  const navigation = useNavigation<EmailVerificationScreenNavigationProp>();
  const route = useRoute<EmailVerificationScreenRouteProp>();
  const [isResending, setIsResending] = useState(false);
  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withRepeat(
      withSequence(
        withTiming(1.1, {
          duration: 1000,
          easing: Easing.bezier(0.4, 0, 0.2, 1),
        }),
        withTiming(1, {
          duration: 1000,
          easing: Easing.bezier(0.4, 0, 0.2, 1),
        })
      ),
      -1,
      true
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handleResendEmail = async () => {
    setIsResending(true);
    try {
      // Implement resend email logic
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(error);
    } finally {
      setIsResending(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Box flex={1} padding="m" alignItems="center" justifyContent="center">
        <Animated.View style={[styles.iconContainer, animatedStyle]}>
          <Box
            width={120}
            height={120}
            borderRadius="round"
            backgroundColor="primary"
            alignItems="center"
            justifyContent="center"
          >
            {/* Add your email icon here */}
          </Box>
        </Animated.View>

        <Text variant="header" color="text" marginBottom="m" textAlign="center">
          Verify Your Email
        </Text>

        <Text variant="body" color="textSecondary" marginBottom="xl" textAlign="center">
          We've sent a verification email to{'\n'}
          <Text variant="body" color="primary">
            {route.params.email}
          </Text>
        </Text>

        <Text
          variant="bodySmall"
          color="textSecondary"
          marginBottom="xl"
          textAlign="center"
        >
          Please check your email and click the verification link to continue.
          If you don't see the email, check your spam folder.
        </Text>

        <Button
          label="Resend Email"
          onPress={handleResendEmail}
          variant="outline"
          isLoading={isResending}
        />

        <Box flexDirection="row" justifyContent="center" marginTop="m">
          <Text variant="body" color="textSecondary">
            Already verified?{' '}
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconContainer: {
    marginBottom: 32,
  },
}); 