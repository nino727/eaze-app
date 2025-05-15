import React from 'react';
import { StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme/theme';
import { Box } from '../components/Box';
import { Text } from '../components/Text';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, {
  useAnimatedStyle,
  withSpring,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';

const { width } = Dimensions.get('window');

interface ExerciseDetailParams {
  exercise: {
    id: string;
    title: string;
    duration: string;
    level: string;
    category: string;
    description: string;
    steps: string[];
  };
}

type ExerciseDetailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ExerciseDetail'
>;

type ExerciseDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'ExerciseDetail'
>;

export const ExerciseDetailScreen: React.FC = () => {
  const theme = useTheme<Theme>();
  const navigation = useNavigation<ExerciseDetailScreenNavigationProp>();
  const route = useRoute<ExerciseDetailScreenRouteProp>();
  const { exercise } = route.params;

  const progress = useSharedValue(0);
  const scale = useSharedValue(1);

  React.useEffect(() => {
    progress.value = withSpring(1);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: scale.value },
        { translateY: withSpring(progress.value * 20) },
      ],
      opacity: progress.value,
    };
  });

  const handlePressIn = () => {
    scale.value = withTiming(0.95);
  };

  const handlePressOut = () => {
    scale.value = withTiming(1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Box flex={1} backgroundColor="background">
        {/* Header */}
        <Box
          flexDirection="row"
          alignItems="center"
          padding="m"
          borderBottomWidth={1}
          borderBottomColor="gray200"
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <Box padding="s">
              <Text variant="body" color="primary">
                ← Back
              </Text>
            </Box>
          </TouchableOpacity>
          <Box flex={1} alignItems="center">
            <Text variant="subheader">{exercise.title}</Text>
          </Box>
          <Box width={60} />
        </Box>

        {/* Content */}
        <Animated.ScrollView style={animatedStyle}>
          <Box padding="m">
            {/* Exercise Info */}
            <Box
              backgroundColor="cardBackground"
              borderRadius="m"
              padding="m"
              marginBottom="m"
            >
              <Box flexDirection="row" justifyContent="space-between" marginBottom="s">
                <Text variant="body" color="gray600">
                  Duration: {exercise.duration}
                </Text>
                <Text variant="body" color="gray600">
                  Level: {exercise.level}
                </Text>
              </Box>
              <Text variant="body" color="gray600">
                Category: {exercise.category}
              </Text>
            </Box>

            {/* Description */}
            <Box marginBottom="m">
              <Text variant="title" marginBottom="s">
                Description
              </Text>
              <Text variant="body">{exercise.description}</Text>
            </Box>

            {/* Steps */}
            <Box>
              <Text variant="title" marginBottom="s">
                Steps
              </Text>
              {exercise.steps.map((step, index) => (
                <Box
                  key={index}
                  flexDirection="row"
                  marginBottom="s"
                  backgroundColor="cardBackground"
                  borderRadius="m"
                  padding="m"
                >
                  <Box
                    width={24}
                    height={24}
                    borderRadius="m"
                    backgroundColor="primary"
                    alignItems="center"
                    justifyContent="center"
                    marginRight="s"
                  >
                    <Text variant="body" color="white">
                      {index + 1}
                    </Text>
                  </Box>
                  <Box flex={1}>
                    <Text variant="body">{step}</Text>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Animated.ScrollView>

        {/* Start Button */}
        <Box padding="m" borderTopWidth={1} borderTopColor="gray200">
          <TouchableOpacity
            onPress={() => {
              // Handle start exercise
            }}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <Box
              backgroundColor="primary"
              borderRadius="m"
              padding="m"
              alignItems="center"
            >
              <Text variant="button" color="white">
                Start Exercise
              </Text>
            </Box>
          </TouchableOpacity>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}); 