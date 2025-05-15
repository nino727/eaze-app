import React, { useState } from 'react';
import { StyleSheet, ScrollView, TextInput } from 'react-native';
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

type BuddySystemScreenNavigationProp = NativeStackNavigationProp<MainTabParamList, 'BuddySystem'>;

const mockBuddies = [
  {
    id: '1',
    name: 'Sarah Johnson',
    lastActive: '2 hours ago',
    streak: 7,
    status: 'online',
  },
  {
    id: '2',
    name: 'Michael Chen',
    lastActive: '1 day ago',
    streak: 14,
    status: 'offline',
  },
  {
    id: '3',
    name: 'Emma Wilson',
    lastActive: '3 hours ago',
    streak: 21,
    status: 'online',
  },
];

export const BuddySystemScreen: React.FC = () => {
  const theme = useTheme<Theme>();
  const navigation = useNavigation<BuddySystemScreenNavigationProp>();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Box padding="m">
          <Text variant="header" color="text" marginBottom="m">
            Practice Buddies
          </Text>

          <Card variant="elevated" marginBottom="m">
            <Box padding="m">
              <Text variant="title" color="text" marginBottom="s">
                Find a Buddy
              </Text>
              <Text variant="body" color="textSecondary" marginBottom="m">
                Connect with others to stay motivated and accountable
              </Text>
              <TextInput
                style={styles.searchInput}
                placeholder="Search by name or email"
                value={searchQuery}
                onChangeText={setSearchQuery}
                placeholderTextColor={theme.colors.textSecondary}
              />
              <Button
                label="Search"
                onPress={() => {}}
                variant="primary"
                style={styles.searchButton}
              />
            </Box>
          </Card>

          <Box marginBottom="m">
            <Text variant="title" color="text" marginBottom="s">
              Your Buddies
            </Text>
            {mockBuddies.map((buddy) => (
              <Card key={buddy.id} variant="elevated" marginBottom="s">
                <Box padding="m" flexDirection="row" alignItems="center">
                  <Box
                    width={40}
                    height={40}
                    borderRadius="round"
                    backgroundColor="primary"
                    marginRight="m"
                  />
                  <Box flex={1}>
                    <Text variant="title" color="text" marginBottom="s">
                      {buddy.name}
                    </Text>
                    <Text variant="body" color="textSecondary">
                      {buddy.lastActive}
                    </Text>
                  </Box>
                  <Box alignItems="flex-end">
                    <Box
                      backgroundColor={buddy.status === 'online' ? 'success' : 'gray200'}
                      padding="xs"
                      borderRadius="s"
                      marginBottom="s"
                    >
                      <Text variant="caption" color={buddy.status === 'online' ? 'white' : 'textSecondary'}>
                        {buddy.status}
                      </Text>
                    </Box>
                    <Text variant="caption" color="textSecondary">
                      {buddy.streak} day streak
                    </Text>
                  </Box>
                </Box>
              </Card>
            ))}
          </Box>

          <Card variant="elevated">
            <Box padding="m">
              <Text variant="title" color="text" marginBottom="s">
                Invite Friends
              </Text>
              <Text variant="body" color="textSecondary" marginBottom="m">
                Share the app with friends and practice together
              </Text>
              <Button
                label="Share App"
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
  searchInput: {
    height: 48,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
  },
  searchButton: {
    marginTop: 8,
  },
}); 