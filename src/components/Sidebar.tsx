import React from 'react';
import { StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme/theme';
import { Box } from './Box';
import { Text } from './Text';
import Animated, {
  useAnimatedStyle,
  withSpring,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const SIDEBAR_WIDTH = width * 0.8;

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const theme = useTheme<Theme>();
  const insets = useSafeAreaInsets();

  const animatedStyle = useAnimatedStyle(() => {
    const translateX = withSpring(isOpen ? 0 : -SIDEBAR_WIDTH, {
      damping: 20,
      stiffness: 90,
    });

    const opacity = interpolate(
      translateX,
      [-SIDEBAR_WIDTH, 0],
      [0, 1],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ translateX }],
      opacity,
    };
  });

  const overlayStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      withSpring(isOpen ? 1 : 0, {
        damping: 20,
        stiffness: 90,
      }),
      [0, 1],
      [0, 0.5],
      Extrapolate.CLAMP
    );

    return {
      opacity,
    };
  });

  return (
    <>
      <Animated.View
        style={[
          styles.overlay,
          overlayStyle,
          { backgroundColor: theme.colors.gray900 },
        ]}
      >
        <TouchableOpacity
          style={styles.overlayTouchable}
          onPress={onClose}
          activeOpacity={1}
        />
      </Animated.View>

      <Animated.View
        style={[
          styles.sidebar,
          animatedStyle,
          {
            backgroundColor: theme.colors.background,
            paddingTop: insets.top,
          },
        ]}
      >
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          padding="m"
          borderBottomWidth={1}
          borderBottomColor="gray200"
        >
          <Text variant="header" color="text">
            Menu
          </Text>
          <TouchableOpacity onPress={onClose}>
            <Ionicons
              name="close"
              size={24}
              color={theme.colors.text}
            />
          </TouchableOpacity>
        </Box>

        <Box flex={1} padding="m">
          {children}
        </Box>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1,
  },
  overlayTouchable: {
    flex: 1,
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: SIDEBAR_WIDTH,
    zIndex: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
}); 