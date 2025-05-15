import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme/theme';
import { Screen } from '../types';
import { Box } from '../components/Box';
import { Text } from '../components/Text';
import { AnimatedIcon } from './AnimatedIcon';

interface NavigationProps {
  currentScreen: Screen;
  onScreenChange: (screen: Screen) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  currentScreen,
  onScreenChange,
}) => {
  const theme = useTheme<Theme>();
  
  const tabs = [
    { 
      screen: 'home' as Screen, 
      icon: require('../assets/animations/home.json'),
      label: 'Home' 
    },
    { 
      screen: 'library' as Screen, 
      icon: require('../assets/animations/library.json'),
      label: 'Exercises' 
    },
    { 
      screen: 'learn' as Screen, 
      icon: require('../assets/animations/learn.json'),
      label: 'Learn' 
    },
    { 
      screen: 'stats' as Screen, 
      icon: require('../assets/animations/stats.json'),
      label: 'Stats' 
    },
  ];

  return (
    <Box
      flexDirection="row"
      justifyContent="space-around"
      alignItems="center"
      backgroundColor="background"
      paddingVertical="s"
      borderTopWidth={1}
      borderTopColor="gray200"
    >
      {tabs.map(({ screen, icon, label }) => (
        <TouchableOpacity
          key={screen}
          onPress={() => onScreenChange(screen)}
          style={{ alignItems: 'center' }}
        >
          <AnimatedIcon
            source={icon}
            isActive={currentScreen === screen}
            size={24}
          />
          <Text
            variant="caption"
            color={currentScreen === screen ? 'primary' : 'gray500'}
            marginTop="xs"
          >
            {label}
          </Text>
        </TouchableOpacity>
      ))}
    </Box>
  );
};

export default Navigation; 