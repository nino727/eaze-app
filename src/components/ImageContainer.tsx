import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme/theme';

const { width: screenWidth } = Dimensions.get('window');

interface ImageContainerProps {
  imageUrl: string;
  size?: number;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ imageUrl, size = screenWidth * 0.8 }) => {
  const theme = useTheme<Theme>();

  return (
    <View 
      style={[
        styles.container, 
        { 
          width: size, 
          height: size,
          borderRadius: theme.borderRadii.l,
          marginBottom: theme.spacing.xl,
        }
      ]}
    >
      <Image
        source={{ uri: imageUrl }}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImageContainer; 