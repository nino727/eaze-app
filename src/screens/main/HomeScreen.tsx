import React from 'react';
import { StyleSheet, ScrollView, RefreshControl } from 'react-native';
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
import { BreathingAnimation } from '../../components/BreathingAnimation';

type HomeScreenNavigationProp = NativeStackNavigationProp<MainTabParamList, 'Home'>;

export const HomeScreen: React.FC = () => {
  const theme = useTheme<Theme>();
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    // Implement refresh logic
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Box padding="m">
          <Text variant="header" color="text" marginBottom="m">
            Welcome Back
          </Text>

          <Card variant="elevated" marginBottom="m">
            <Box padding="m">
              <Text variant="title" color="text" marginBottom="s">
                Your Daily Exercise
              </Text>
              <Text variant="body" color="textSecondary" marginBottom="m">
                Take a moment to regulate your nervous system
              </Text>
              <BreathingAnimation size={200} />
              <Button
                label="Start Exercise"
                onPress={() => navigation.navigate('Exercises')}
                variant="primary"
                marginTop="m"
              />
            </Box>
          </Card>

          <Card variant="elevated" marginBottom="m">
            <Box padding="m">
              <Text variant="title" color="text" marginBottom="s">
                Your Progress
              </Text>
              <Text variant="body" color="textSecondary" marginBottom="m">
                3 day streak! Keep it up!
              </Text>
              {/* Add progress chart here */}
            </Box>
          </Card>

          <Card variant="elevated" marginBottom="m">
            <Box padding="m">
              <Text variant="title" color="text" marginBottom="s">
                Quick Rest
              </Text>
              <Text variant="body" color="textSecondary" marginBottom="m">
                Take a quick break to reset
              </Text>
              <Button
                label="Start Quick Rest"
                onPress={() => {}}
                variant="secondary"
              />
            </Box>
          </Card>

          <Card variant="elevated">
            <Box padding="m">
              <Text variant="title" color="text" marginBottom="s">
                Connect with Buddy
              </Text>
              <Text variant="body" color="textSecondary" marginBottom="m">
                Practice together and support each other
              </Text>
              <Button
                label="Find a Buddy"
                onPress={() => {}}
                variant="outline"
              />
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
}); 