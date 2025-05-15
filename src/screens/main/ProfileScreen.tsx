import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
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

type ProfileScreenNavigationProp = NativeStackNavigationProp<MainTabParamList, 'Profile'>;

const menuItems = [
  {
    title: 'Settings',
    description: 'Customize your app experience',
    route: 'Settings' as const,
  },
  {
    title: 'Subscription',
    description: 'Manage your subscription plan',
    route: 'Settings' as const,
  },
  {
    title: 'Buddy System',
    description: 'Connect with your practice buddy',
    route: 'Settings' as const,
  },
  {
    title: 'Notifications',
    description: 'Manage your notification preferences',
    route: 'Settings' as const,
  },
];

export const ProfileScreen: React.FC = () => {
  const theme = useTheme<Theme>();
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const handleNavigation = (route: string) => {
    navigation.navigate('Settings', {
      screen: route,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Box padding="m">
          <Box alignItems="center" marginBottom="xl">
            <Box
              width={100}
              height={100}
              borderRadius="round"
              backgroundColor="primary"
              marginBottom="m"
            />
            <Text variant="header" color="text" marginBottom="s">
              John Doe
            </Text>
            <Text variant="body" color="textSecondary">
              john.doe@example.com
            </Text>
          </Box>

          <Card variant="elevated" marginBottom="m">
            <Box padding="m">
              <Text variant="title" color="text" marginBottom="s">
                Current Plan
              </Text>
              <Box
                backgroundColor="primary"
                padding="m"
                borderRadius="m"
                marginBottom="m"
              >
                <Text variant="body" color="white">
                  Premium Plan
                </Text>
                <Text variant="caption" color="white">
                  Renews on March 1, 2024
                </Text>
              </Box>
              <Button
                label="Manage Subscription"
                onPress={() => handleNavigation('Subscription')}
                variant="outline"
              />
            </Box>
          </Card>

          <Box marginBottom="m">
            {menuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleNavigation(item.route)}
              >
                <Card variant="elevated" marginBottom="s">
                  <Box padding="m">
                    <Text variant="title" color="text" marginBottom="s">
                      {item.title}
                    </Text>
                    <Text variant="body" color="textSecondary">
                      {item.description}
                    </Text>
                  </Box>
                </Card>
              </TouchableOpacity>
            ))}
          </Box>

          <Button
            label="Sign Out"
            onPress={() => {}}
            variant="secondary"
          />
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