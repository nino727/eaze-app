import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme/theme';
import { Box } from '../../components/Box';
import { Text } from '../../components/Text';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Sidebar } from '../../components/Sidebar';
import { ExerciseHistoryList } from '../../components/ExerciseHistory';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { mockExerciseHistory } from '../../data/mockExerciseHistory';

export const ExerciseHistoryScreen: React.FC = () => {
  const theme = useTheme<Theme>();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleHistoryPress = (item: ExerciseHistory) => {
    // Handle history item press
    console.log('History item pressed:', item);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        padding="m"
        borderBottomWidth={1}
        borderBottomColor="gray200"
      >
        <TouchableOpacity onPress={() => setIsSidebarOpen(true)}>
          <Ionicons
            name="menu"
            size={24}
            color={theme.colors.text}
          />
        </TouchableOpacity>
        <Text variant="header" color="text">
          Exercise History
        </Text>
        <Box width={24} />
      </Box>

      <ExerciseHistoryList
        history={mockExerciseHistory}
        onPress={handleHistoryPress}
      />

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      >
        <Box>
          <Text variant="title" color="text" marginBottom="m">
            Filter History
          </Text>
          {/* Add filter options here */}
        </Box>
      </Sidebar>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}); 