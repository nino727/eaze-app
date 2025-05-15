import React from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme/theme';
import { Box } from '../components/Box';
import { Text } from '../components/Text';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import Animated, {
  FadeInDown,
  FadeInRight,
} from 'react-native-reanimated';

const AnimatedCard = Animated.createAnimatedComponent(Card);

export const ProfileScreen = () => {
  const theme = useTheme<Theme>();

  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinDate: 'January 2024',
    level: 'Intermediate',
    streak: 7,
  };

  const stats = [
    {
      title: 'Total Sessions',
      value: '48',
    },
    {
      title: 'Hours Meditated',
      value: '12',
    },
    {
      title: 'Current Streak',
      value: `${userData.streak} days`,
    },
  ];

  return (
    <Box flex={1} backgroundColor="background">
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Box padding="l">
          <AnimatedCard
            entering={FadeInDown.delay(0)}
            marginBottom="l"
            variant="elevated"
          >
            <Box alignItems="center">
              <Box
                width={100}
                height={100}
                borderRadius="xl"
                backgroundColor="gray200"
                marginBottom="m"
                overflow="hidden"
              >
                <Image
                  source={{ uri: 'https://via.placeholder.com/100' }}
                  style={styles.avatar}
                />
              </Box>
              <Text variant="header" marginBottom="xs">
                {userData.name}
              </Text>
              <Text variant="bodySmall" color="gray600" marginBottom="m">
                {userData.email}
              </Text>
              <Button
                label="Edit Profile"
                variant="secondary"
                onPress={() => {}}
              />
            </Box>
          </AnimatedCard>

          <AnimatedCard
            entering={FadeInRight.delay(100)}
            marginBottom="l"
          >
            <Box>
              <Text variant="body" fontWeight="600" marginBottom="m">
                Member Since
              </Text>
              <Text variant="bodySmall" color="gray600">
                {userData.joinDate}
              </Text>
            </Box>
          </AnimatedCard>

          <AnimatedCard
            entering={FadeInRight.delay(200)}
            marginBottom="l"
          >
            <Box>
              <Text variant="body" fontWeight="600" marginBottom="m">
                Level
              </Text>
              <Box
                flexDirection="row"
                alignItems="center"
                marginBottom="s"
              >
                <Box
                  width={40}
                  height={40}
                  borderRadius="m"
                  backgroundColor="primary"
                  alignItems="center"
                  justifyContent="center"
                  marginRight="s"
                >
                  <Text variant="header" color="white">
                    {userData.level[0]}
                  </Text>
                </Box>
                <Text variant="body" fontWeight="600">
                  {userData.level}
                </Text>
              </Box>
              <Text variant="bodySmall" color="gray600">
                Keep practicing to reach the next level
              </Text>
            </Box>
          </AnimatedCard>

          <AnimatedCard
            entering={FadeInRight.delay(300)}
            marginBottom="l"
          >
            <Box>
              <Text variant="body" fontWeight="600" marginBottom="m">
                Statistics
              </Text>
              {stats.map((stat) => (
                <Box
                  key={stat.title}
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  marginBottom="s"
                >
                  <Text variant="bodySmall" color="gray600">
                    {stat.title}
                  </Text>
                  <Text variant="body" fontWeight="600">
                    {stat.value}
                  </Text>
                </Box>
              ))}
            </Box>
          </AnimatedCard>

          <AnimatedCard
            entering={FadeInRight.delay(400)}
          >
            <Box>
              <Text variant="body" fontWeight="600" marginBottom="m">
                Preferences
              </Text>
              <Box marginBottom="s">
                <Button
                  label="Notification Settings"
                  variant="secondary"
                  onPress={() => {}}
                  fullWidth
                />
              </Box>
              <Button
                label="Privacy Settings"
                variant="secondary"
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
  avatar: {
    width: '100%',
    height: '100%',
  },
}); 