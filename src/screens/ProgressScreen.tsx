import React from 'react';
import { ScrollView, StyleSheet, Dimensions } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme/theme';
import { Box } from '../components/Box';
import { Text } from '../components/Text';
import { Card } from '../components/Card';
import { LineChart } from 'react-native-chart-kit';
import Animated, {
  FadeInDown,
  FadeInRight,
} from 'react-native-reanimated';

const AnimatedCard = Animated.createAnimatedComponent(Card);

const chartConfig = {
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  color: (opacity = 1) => `rgba(81, 150, 244, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
};

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 50],
      color: (opacity = 1) => `rgba(81, 150, 244, ${opacity})`,
      strokeWidth: 2,
    },
  ],
};

const screenWidth = Dimensions.get('window').width;

export const ProgressScreen = () => {
  const theme = useTheme<Theme>();

  const stats = [
    {
      title: 'Total Sessions',
      value: '24',
      change: '+12%',
      isPositive: true,
    },
    {
      title: 'Average Duration',
      value: '15 min',
      change: '+5%',
      isPositive: true,
    },
    {
      title: 'Calories Burned',
      value: '1,200',
      change: '-3%',
      isPositive: false,
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
            Progress
          </Text>

          <AnimatedCard
            entering={FadeInDown.delay(0)}
            marginBottom="l"
            variant="elevated"
          >
            <Box>
              <Text variant="body" fontWeight="600" marginBottom="m">
                Weekly Activity
              </Text>
              <LineChart
                data={data}
                width={screenWidth - theme.spacing.l * 2}
                height={220}
                chartConfig={chartConfig}
                bezier
                style={styles.chart}
              />
            </Box>
          </AnimatedCard>

          {stats.map((stat, index) => (
            <AnimatedCard
              key={stat.title}
              entering={FadeInRight.delay(index * 100)}
              marginBottom="m"
            >
              <Box
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Text variant="bodySmall" color="gray600" marginBottom="xs">
                    {stat.title}
                  </Text>
                  <Text variant="header" fontWeight="600">
                    {stat.value}
                  </Text>
                </Box>
                <Box
                  backgroundColor={stat.isPositive ? 'success' : 'error'}
                  paddingHorizontal="s"
                  paddingVertical="xs"
                  borderRadius="s"
                >
                  <Text
                    variant="bodySmall"
                    color="white"
                    fontWeight="600"
                  >
                    {stat.change}
                  </Text>
                </Box>
              </Box>
            </AnimatedCard>
          ))}

          <AnimatedCard
            entering={FadeInRight.delay(stats.length * 100)}
            marginBottom="m"
          >
            <Box>
              <Text variant="body" fontWeight="600" marginBottom="xs">
                Achievements
              </Text>
              <Text variant="bodySmall" color="gray600">
                Complete more sessions to unlock achievements
              </Text>
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
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
}); 