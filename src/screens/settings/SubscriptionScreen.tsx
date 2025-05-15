import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme/theme';
import { Box } from '../../components/Box';
import { Text } from '../../components/Text';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainTabParamList } from '../../navigation/types';

type SubscriptionScreenNavigationProp = NativeStackNavigationProp<MainTabParamList, 'Subscription'>;

const plans = [
  {
    id: 'free',
    title: 'Free',
    price: '$0',
    period: 'forever',
    features: [
      'Basic breathing exercises',
      'Limited exercise library',
      'Basic progress tracking',
    ],
  },
  {
    id: 'premium',
    title: 'Premium',
    price: '$9.99',
    period: 'month',
    features: [
      'Full exercise library',
      'Advanced progress tracking',
      'Custom exercise creation',
      'Buddy system access',
      'Priority support',
    ],
    recommended: true,
  },
  {
    id: 'annual',
    title: 'Annual',
    price: '$89.99',
    period: 'year',
    features: [
      'All Premium features',
      'Save 25%',
      'Early access to new features',
      'Exclusive content',
    ],
  },
];

export const SubscriptionScreen: React.FC = () => {
  const theme = useTheme<Theme>();
  const navigation = useNavigation<SubscriptionScreenNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Box padding="m">
          <Text variant="header" color="text" marginBottom="m">
            Subscription Plans
          </Text>

          <Box marginBottom="m">
            {plans.map((plan) => (
              <View key={plan.id} style={plan.recommended ? styles.recommendedCard : undefined}>
                <Card variant="elevated" marginBottom="m">
                  <Box padding="m">
                    {plan.recommended && (
                      <Box
                        backgroundColor="primary"
                        padding="s"
                        borderRadius="s"
                        marginBottom="s"
                        style={styles.recommendedBadge}
                      >
                        <Text variant="caption" color="white">
                          Recommended
                        </Text>
                      </Box>
                    )}
                    <Text variant="title" color="text" marginBottom="s">
                      {plan.title}
                    </Text>
                    <Box flexDirection="row" alignItems="center" marginBottom="m">
                      <Text variant="header" color="text">
                        {plan.price}
                      </Text>
                      <Box style={styles.periodContainer}>
                        <Text variant="body" color="textSecondary">
                          /{plan.period}
                        </Text>
                      </Box>
                    </Box>
                    <Box marginBottom="m">
                      {plan.features.map((feature, index) => (
                        <Box
                          key={index}
                          flexDirection="row"
                          alignItems="center"
                          marginBottom="s"
                        >
                          <Box
                            width={16}
                            height={16}
                            borderRadius="round"
                            backgroundColor="success"
                            marginRight="s"
                          />
                          <Text variant="body" color="textSecondary">
                            {feature}
                          </Text>
                        </Box>
                      ))}
                    </Box>
                    <Button
                      label={plan.id === 'free' ? 'Current Plan' : 'Upgrade'}
                      onPress={() => {}}
                      variant={plan.recommended ? 'primary' : 'outline'}
                      disabled={plan.id === 'free'}
                    />
                  </Box>
                </Card>
              </View>
            ))}
          </Box>

          <Card variant="elevated" marginBottom="m">
            <Box padding="m">
              <Text variant="title" color="text" marginBottom="s">
                Payment Information
              </Text>
              <Text variant="body" color="textSecondary" marginBottom="m">
                Your subscription will automatically renew at the end of each billing period.
              </Text>
              <Button
                label="Manage Payment Method"
                onPress={() => {}}
                variant="outline"
              />
            </Box>
          </Card>

          <Card variant="elevated">
            <Box padding="m">
              <Text variant="title" color="text" marginBottom="s">
                Need Help?
              </Text>
              <Text variant="body" color="textSecondary" marginBottom="m">
                Contact our support team for any questions about your subscription.
              </Text>
              <Button
                label="Contact Support"
                onPress={() => {}}
                variant="secondary"
              />
            </Box>
          </Card>
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
  recommendedCard: {
    borderWidth: 2,
    borderColor: '#007AFF',
    borderRadius: 8,
  },
  recommendedBadge: {
    alignSelf: 'flex-start',
  },
  periodContainer: {
    marginLeft: 8,
  },
}); 