import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme/theme';
import { Box } from './Box';
import { Text } from './Text';
import { Card } from './Card';
import { ExerciseHistory } from '../types';
import Animated, {
  FadeInDown,
  FadeOutUp,
} from 'react-native-reanimated';
import { format } from 'date-fns';

interface ExerciseHistoryProps {
  history: ExerciseHistory[];
  onPress?: (item: ExerciseHistory) => void;
}

const AnimatedCard = Animated.createAnimatedComponent(Card);

export const ExerciseHistoryList: React.FC<ExerciseHistoryProps> = ({
  history,
  onPress,
}) => {
  const theme = useTheme<Theme>();

  const renderItem = ({ item, index }: { item: ExerciseHistory; index: number }) => (
    <AnimatedCard
      entering={FadeInDown.delay(index * 100)}
      exiting={FadeOutUp}
      variant="elevated"
      marginBottom="m"
      onPress={() => onPress?.(item)}
    >
      <Box padding="m">
        <Box flexDirection="row" justifyContent="space-between" marginBottom="s">
          <Text variant="title" color="text">
            {format(new Date(item.completedAt), 'MMM d, yyyy')}
          </Text>
          <Box
            backgroundColor="primary"
            paddingHorizontal="s"
            paddingVertical="xs"
            borderRadius="s"
          >
            <Text variant="caption" color="white">
              {item.duration} min
            </Text>
          </Box>
        </Box>

        <Box flexDirection="row" alignItems="center" marginBottom="s">
          <Box
            width={8}
            height={8}
            borderRadius="round"
            backgroundColor="success"
            marginRight="s"
          />
          <Text variant="body" color="textSecondary">
            Mood improved from {item.moodBefore} to {item.moodAfter}
          </Text>
        </Box>

        <Box flexDirection="row" alignItems="center">
          {[...Array(5)].map((_, i) => (
            <Box
              key={i}
              marginRight="xs"
              opacity={i < item.rating ? 1 : 0.3}
            >
              <Text variant="body" color="accent1">
                ★
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
    </AnimatedCard>
  );

  return (
    <FlatList
      data={history}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.listContent}
    />
  );
};

const styles = StyleSheet.create({
  listContent: {
    padding: 16,
  },
}); 