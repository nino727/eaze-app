import React from 'react';
import { StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme/theme';
import { Box } from '../../components/Box';
import { Text } from '../../components/Text';
import { Card } from '../../components/Card';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LineChart } from 'react-native-chart-kit';

const { width } = Dimensions.get('window');

const mockData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 50],
      color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
      strokeWidth: 2,
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
  useShadowColorFromDataset: false,
};

export const ProgressScreen: React.FC = () => {
  const theme = useTheme<Theme>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Box padding="m">
          <Text variant="header" color="text" marginBottom="m">
            Your Progress
          </Text>

          <Card variant="elevated" marginBottom="m">
            <Box padding="m">
              <Text variant="title" color="text" marginBottom="s">
                Weekly Activity
              </Text>
              <Text variant="body" color="textSecondary" marginBottom="m">
                Track your daily exercise minutes
              </Text>
              <LineChart
                data={mockData}
                width={width - 48}
                height={220}
                chartConfig={chartConfig}
                bezier
                style={styles.chart}
              />
            </Box>
          </Card>

          <Card variant="elevated" marginBottom="m">
            <Box padding="m">
              <Text variant="title" color="text" marginBottom="s">
                Current Streak
              </Text>
              <Text variant="header" color="primary" marginBottom="m">
                7 Days
              </Text>
              <Text variant="body" color="textSecondary">
                Keep up the good work! You're on your way to building a healthy habit.
              </Text>
            </Box>
          </Card>

          <Card variant="elevated" marginBottom="m">
            <Box padding="m">
              <Text variant="title" color="text" marginBottom="s">
                Most Effective Exercises
              </Text>
              <Box marginBottom="m">
                <Text variant="body" color="textSecondary">
                  1. Box Breathing
                </Text>
                <Text variant="caption" color="textSecondary">
                  Effectiveness: 9/10
                </Text>
              </Box>
              <Box marginBottom="m">
                <Text variant="body" color="textSecondary">
                  2. Grounding Technique
                </Text>
                <Text variant="caption" color="textSecondary">
                  Effectiveness: 8/10
                </Text>
              </Box>
              <Box>
                <Text variant="body" color="textSecondary">
                  3. Body Scan
                </Text>
                <Text variant="caption" color="textSecondary">
                  Effectiveness: 7/10
                </Text>
              </Box>
            </Box>
          </Card>

          <Card variant="elevated">
            <Box padding="m">
              <Text variant="title" color="text" marginBottom="s">
                Nervous System State
              </Text>
              <Text variant="body" color="textSecondary" marginBottom="m">
                Your average state this week
              </Text>
              <Box
                backgroundColor="success"
                padding="m"
                borderRadius="m"
                marginBottom="s"
              >
                <Text variant="body" color="white">
                  Regulated: 60%
                </Text>
              </Box>
              <Box
                backgroundColor="warning"
                padding="m"
                borderRadius="m"
                marginBottom="s"
              >
                <Text variant="body" color="white">
                  Slightly Activated: 30%
                </Text>
              </Box>
              <Box
                backgroundColor="error"
                padding="m"
                borderRadius="m"
              >
                <Text variant="body" color="white">
                  Highly Activated: 10%
                </Text>
              </Box>
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
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
}); 