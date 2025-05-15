import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme/theme';
import { Box } from '../components/Box';
import { Text } from '../components/Text';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { useSettingsStore } from '../store/settingsStore';
import Animated, {
  FadeInDown,
  FadeInRight,
} from 'react-native-reanimated';

const AnimatedCard = Animated.createAnimatedComponent(Card);

export const SettingsScreen = () => {
  const theme = useTheme<Theme>();
  const {
    darkMode,
    notifications,
    soundEffects,
    toggleDarkMode,
    toggleNotifications,
    toggleSoundEffects,
  } = useSettingsStore();

  const settings = [
    {
      title: 'Dark Mode',
      description: 'Enable dark theme for the app',
      value: darkMode,
      onToggle: toggleDarkMode,
    },
    {
      title: 'Notifications',
      description: 'Receive reminders and updates',
      value: notifications,
      onToggle: toggleNotifications,
    },
    {
      title: 'Sound Effects',
      description: 'Play sounds during exercises',
      value: soundEffects,
      onToggle: toggleSoundEffects,
    },
  ];

  return (
    <Box flex={1} backgroundColor="background">
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Box padding="l">
          <Text variant="header" marginBottom="l">
            Settings
          </Text>

          {settings.map((setting, index) => (
            <AnimatedCard
              key={setting.title}
              entering={FadeInDown.delay(index * 100)}
              marginBottom="m"
            >
              <Box
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box flex={1}>
                  <Text variant="body" fontWeight="600" marginBottom="xs">
                    {setting.title}
                  </Text>
                  <Text variant="bodySmall" color="gray600">
                    {setting.description}
                  </Text>
                </Box>
                <Button
                  label={setting.value ? 'On' : 'Off'}
                  variant={setting.value ? 'primary' : 'secondary'}
                  size="small"
                  onPress={setting.onToggle}
                />
              </Box>
            </AnimatedCard>
          ))}

          <AnimatedCard
            entering={FadeInRight.delay(settings.length * 100)}
            marginBottom="m"
          >
            <Box>
              <Text variant="body" fontWeight="600" marginBottom="xs">
                About
              </Text>
              <Text variant="bodySmall" color="gray600" marginBottom="m">
                Version 1.0.0
              </Text>
              <Button
                label="Rate App"
                variant="secondary"
                onPress={() => {}}
                fullWidth
              />
            </Box>
          </AnimatedCard>

          <AnimatedCard
            entering={FadeInRight.delay((settings.length + 1) * 100)}
          >
            <Box>
              <Text variant="body" fontWeight="600" marginBottom="xs">
                Account
              </Text>
              <Button
                label="Sign Out"
                variant="error"
                onPress={() => {}}
                fullWidth
              />
            </Box>
          </AnimatedCard>
        </Box>
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}); 