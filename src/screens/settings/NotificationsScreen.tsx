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

type NotificationsScreenNavigationProp = NativeStackNavigationProp<MainTabParamList, 'Notifications'>;

interface NotificationSettingProps {
  title: string;
  description: string;
  value: boolean;
  onValueChange: (value: boolean) => void;
}

const NotificationSetting: React.FC<NotificationSettingProps> = ({
  title,
  description,
  value,
  onValueChange,
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
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={value ? '#007AFF' : '#f4f3f4'}
      />
    </Box>
  </Card>
);

export const NotificationsScreen: React.FC = () => {
  const theme = useTheme<Theme>();
  const navigation = useNavigation<NotificationsScreenNavigationProp>();
  const [settings, setSettings] = useState({
    dailyReminders: true,
    exerciseReminders: true,
    buddyActivity: true,
    achievements: true,
    tipsAndTricks: false,
    appUpdates: true,
  });

  const handleSettingChange = (key: keyof typeof settings) => (value: boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Box padding="m">
          <Text variant="header" color="text" marginBottom="m">
            Notifications
          </Text>

          <Box marginBottom="m">
            <Text variant="title" color="text" marginBottom="s">
              Reminders
            </Text>
            <NotificationSetting
              title="Daily Reminders"
              description="Get reminded to practice daily"
              value={settings.dailyReminders}
              onValueChange={handleSettingChange('dailyReminders')}
            />
            <NotificationSetting
              title="Exercise Reminders"
              description="Get notified about scheduled exercises"
              value={settings.exerciseReminders}
              onValueChange={handleSettingChange('exerciseReminders')}
            />
          </Box>

          <Box marginBottom="m">
            <Text variant="title" color="text" marginBottom="s">
              Social
            </Text>
            <NotificationSetting
              title="Buddy Activity"
              description="Get notified when your buddies complete exercises"
              value={settings.buddyActivity}
              onValueChange={handleSettingChange('buddyActivity')}
            />
            <NotificationSetting
              title="Achievements"
              description="Get notified when you or your buddies earn achievements"
              value={settings.achievements}
              onValueChange={handleSettingChange('achievements')}
            />
          </Box>

          <Box marginBottom="m">
            <Text variant="title" color="text" marginBottom="s">
              Updates & Tips
            </Text>
            <NotificationSetting
              title="Tips & Tricks"
              description="Receive helpful tips and techniques"
              value={settings.tipsAndTricks}
              onValueChange={handleSettingChange('tipsAndTricks')}
            />
            <NotificationSetting
              title="App Updates"
              description="Get notified about new features and improvements"
              value={settings.appUpdates}
              onValueChange={handleSettingChange('appUpdates')}
            />
          </Box>

          <Card variant="elevated">
            <Box padding="m">
              <Text variant="title" color="text" marginBottom="s">
                Quiet Hours
              </Text>
              <Text variant="body" color="textSecondary" marginBottom="m">
                Set a time period when you don't want to receive notifications
              </Text>
              <Box flexDirection="row" alignItems="center" marginBottom="s">
                <Switch
                  value={false}
                  onValueChange={() => {}}
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  thumbColor={false ? '#007AFF' : '#f4f3f4'}
                />
                <Text variant="body" color="text" style={styles.quietHoursText}>
                  Enable Quiet Hours
                </Text>
              </Box>
              <Text variant="caption" color="textSecondary">
                Notifications will be silenced during quiet hours
              </Text>
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
  quietHoursText: {
    marginLeft: 12,
  },
}); 