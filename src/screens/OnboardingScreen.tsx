import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { createBox, createText, useTheme } from '@shopify/restyle';
import { Theme } from '../theme/theme';
import { useSafeArea } from '../hooks/useSafeArea';
import { useAnimation } from '../hooks/useAnimation';
import ImageContainer from '../components/ImageContainer';

const Box = createBox<Theme>();
const Text = createText<Theme>();

const { width: screenWidth } = Dimensions.get('window');

const SLIDES = [
  {
    id: '1',
    title: 'Welcome to Ease',
    description: 'Your personal guide to nervous system regulation and stress reduction.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '2',
    title: 'Guided Exercises',
    description: 'Access a variety of breathing techniques, grounding exercises, and quick resets.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '3',
    title: 'Track Your Progress',
    description: 'Monitor your practice and build healthy habits for better well-being.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  },
];

export function OnboardingScreen() {
  const theme = useTheme<Theme>();
  const { getSafeAreaStyle } = useSafeArea();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { createSpringAnimation } = useAnimation();

  const scrollX = createSpringAnimation(currentIndex * screenWidth);

  const handleNext = () => {
    if (currentIndex < SLIDES.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // TODO: Complete onboarding
    }
  };

  return (
    <Box flex={1} backgroundColor="background" style={getSafeAreaStyle()}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
          setCurrentIndex(newIndex);
        }}
      >
        {SLIDES.map((slide) => (
          <Box
            key={slide.id}
            width={screenWidth}
            padding="m"
            alignItems="center"
            justifyContent="center"
          >
            <ImageContainer imageUrl={slide.image} />

            <Text variant="header" marginBottom="m" textAlign="center">
              {slide.title}
            </Text>

            <Text
              variant="body"
              color="gray600"
              textAlign="center"
              marginBottom="xl"
              paddingHorizontal="l"
            >
              {slide.description}
            </Text>
          </Box>
        ))}
      </ScrollView>

      {/* Pagination */}
      <Box
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        marginBottom="l"
      >
        {SLIDES.map((_, index) => (
          <Box
            key={index}
            width={8}
            height={8}
            borderRadius="round"
            backgroundColor={index === currentIndex ? 'primary' : 'gray300'}
            marginHorizontal="xs"
          />
        ))}
      </Box>

      {/* Navigation Buttons */}
      <Box padding="m">
        <TouchableOpacity
          onPress={handleNext}
          style={{
            backgroundColor: theme.colors.primary,
            borderRadius: theme.borderRadii.m,
            padding: theme.spacing.m,
            alignItems: 'center',
          }}
        >
          <Text variant="button" color="background">
            {currentIndex === SLIDES.length - 1 ? 'Get Started' : 'Next'}
          </Text>
        </TouchableOpacity>

        {currentIndex < SLIDES.length - 1 && (
          <TouchableOpacity
            onPress={() => setCurrentIndex(SLIDES.length - 1)}
            style={{
              padding: theme.spacing.m,
              alignItems: 'center',
            }}
          >
            <Text variant="body" color="gray600">
              Skip
            </Text>
          </TouchableOpacity>
        )}
      </Box>
    </Box>
  );
} 