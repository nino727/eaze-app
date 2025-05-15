import React, { useState } from 'react';
import { StyleSheet, ScrollView, Switch } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme/theme';
import { Box } from '../../components/Box';
import { Text } from '../../components/Text';
import { Card } from '../../components/Card';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainTabParamList } from '../../navigation/types';

type SettingsScreenNavigationProp = NativeStackNavigationProp<MainTabParamList, 'Settings'>;

interface SettingItemProps {
  title: string;
  description: string;
  value?: boolean;
  onValueChange?: (value: boolean) => void;
  onPress?: () => void;
}

const SettingItem: React.FC<SettingItemProps> = ({
  title,
  description,
  value,
  onValueChange,
  onPress,
}) => (
  <Card variant="elevated" marginBottom="s">
    <Box padding="m" flexDirection="row" justifyContent="space-between" alignItems="center">
      <Box flex={1}>
        <Text variant="title" color="text" marginBottom="s">
          {title}
        </Text>
        <Text variant="body" color="textSecondary">
          {description}
        </Text>
      </Box>
      {onValueChange !== undefined ? (
        <Switch
          value={value}
          onValueChange={onValueChange}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={value ? '#007AFF' : '#f4f3f4'}
        />
      ) : (
        <Box
          width={24}
          height={24}
          borderRadius="round"
          backgroundColor="primary"
          onTouchEnd={onPress}
        />
      )}
    </Box>
  </Card>
);

export const SettingsScreen: React.FC = () => {
  const theme = useTheme<Theme>();
  const navigation = useNavigation<SettingsScreenNavigationProp>();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [soundEffects, setSoundEffects] = useState(true);
  const [hapticFeedback, setHapticFeedback] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Box padding="m">
          <Text variant="header" color="text" marginBottom="m">
            Settings
          </Text>

          <Box marginBottom="m">
            <Text variant="title" color="text" marginBottom="s">
              Notifications
            </Text>
            <SettingItem
              title="Push Notifications"
              description="Receive reminders and updates"
              value={notifications}
              onValueChange={setNotifications}
            />
          </Box>

          <Box marginBottom="m">
            <Text variant="title" color="text" marginBottom="s">
              Appearance
            </Text>
            <SettingItem
              title="Dark Mode"
              description="Switch between light and dark themes"
              value={darkMode}
              onValueChange={setDarkMode}
            />
          </Box>

          <Box marginBottom="m">
            <Text variant="title" color="text" marginBottom="s">
              Sound & Haptics
            </Text>
            <SettingItem
              title="Sound Effects"
              description="Play sounds during exercises"
              value={soundEffects}
              onValueChange={setSoundEffects}
            />
            <SettingItem
              title="Haptic Feedback"
              description="Vibrate during exercises"
              value={hapticFeedback}
              onValueChange={setHapticFeedback}
            />
          </Box>

          <Box marginBottom="m">
            <Text variant="title" color="text" marginBottom="s">
              Data & Privacy
            </Text>
            <SettingItem
              title="Export Data"
              description="Download your exercise history"
              onPress={() => {}}
            />
            <SettingItem
              title="Delete Account"
              description="Permanently delete your account and data"
              onPress={() => {}}
            />
          </Box>

          <Box marginBottom="m">
            <Text variant="title" color="text" marginBottom="s">
              About
            </Text>
            <SettingItem
              title="Version"
              description="1.0.0"
            />
            <SettingItem
              title="Terms of Service"
              description="Read our terms and conditions"
              onPress={() => {}}
            />
            <SettingItem
              title="Privacy Policy"
              description="Read our privacy policy"
              onPress={() => {}}
            />
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