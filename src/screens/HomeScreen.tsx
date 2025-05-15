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

export const HomeScreen = () => {
  const theme = useTheme<Theme>();

  const recommendedSessions = [
    {
      id: '1',
      title: 'Morning Meditation',
      duration: '10 min',
      level: 'Beginner',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      title: 'Stress Relief',
      duration: '15 min',
      level: 'Intermediate',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '3',
      title: 'Deep Focus',
      duration: '20 min',
      level: 'Advanced',
      image: 'https://via.placeholder.com/150',
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
            <Box>
              <Text variant="header" marginBottom="xs">
                Welcome Back
              </Text>
              <Text variant="bodySmall" color="gray600" marginBottom="m">
                Continue your mindfulness journey
              </Text>
              <Button
                label="Start Session"
                variant="primary"
                onPress={() => {}}
                fullWidth
              />
            </Box>
          </AnimatedCard>

          <AnimatedCard
            entering={FadeInRight.delay(100)}
            marginBottom="l"
          >
            <Box>
              <Text variant="body" fontWeight="600" marginBottom="m">
                Daily Progress
              </Text>
              <Box
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                marginBottom="s"
              >
                <Text variant="bodySmall" color="gray600">
                  Today's Goal
                </Text>
                <Text variant="body" fontWeight="600">
                  10 min
                </Text>
              </Box>
              <Box
                height={8}
                backgroundColor="gray200"
                borderRadius="m"
                overflow="hidden"
              >
                <Box
                  width="60%"
                  height="100%"
                  backgroundColor="primary"
                />
              </Box>
            </Box>
          </AnimatedCard>

          <AnimatedCard
            entering={FadeInRight.delay(200)}
            marginBottom="l"
          >
            <Box>
              <Text variant="body" fontWeight="600" marginBottom="m">
                Recommended Sessions
              </Text>
              {recommendedSessions.map((session) => (
                <Box
                  key={session.id}
                  flexDirection="row"
                  alignItems="center"
                  marginBottom="m"
                >
                  <Box
                    width={80}
                    height={80}
                    borderRadius="m"
                    backgroundColor="gray200"
                    marginRight="m"
                    overflow="hidden"
                  >
                    <Image
                      source={{ uri: session.image }}
                      style={styles.sessionImage}
                    />
                  </Box>
                  <Box flex={1}>
                    <Text variant="body" fontWeight="600" marginBottom="xs">
                      {session.title}
                    </Text>
                    <Text variant="bodySmall" color="gray600" marginBottom="xs">
                      {session.duration} • {session.level}
                    </Text>
                    <Button
                      label="Start"
                      variant="secondary"
                      size="small"
                      onPress={() => {}}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </AnimatedCard>

          <AnimatedCard
            entering={FadeInRight.delay(300)}
          >
            <Box>
              <Text variant="body" fontWeight="600" marginBottom="m">
                Quick Actions
              </Text>
              <Box marginBottom="s">
                <Button
                  label="View History"
                  variant="secondary"
                  onPress={() => {}}
                  fullWidth
                />
              </Box>
              <Button
                label="Set Reminder"
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
  sessionImage: {
    width: '100%',
    height: '100%',
  },
}); 