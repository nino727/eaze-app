import { useSharedValue, withSpring, withTiming, withSequence, withDelay, Easing, EasingFunction } from 'react-native-reanimated';

interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: EasingFunction;
}

export function useAnimation() {
  const createSpringAnimation = (value: number, config?: AnimationConfig) => {
    const animatedValue = useSharedValue(value);
    
    const animate = (toValue: number) => {
      animatedValue.value = withSpring(toValue, {
        damping: 15,
        stiffness: 100,
        mass: 1,
      });
    };
    
    return { animatedValue, animate };
  };
  
  const createTimingAnimation = (value: number, config?: AnimationConfig) => {
    const animatedValue = useSharedValue(value);
    
    const animate = (toValue: number) => {
      animatedValue.value = withTiming(toValue, {
        duration: config?.duration || 300,
        easing: config?.easing || Easing.bezier(0.4, 0, 0.2, 1),
      });
    };
    
    return { animatedValue, animate };
  };
  
  const createSequenceAnimation = (value: number, config?: AnimationConfig) => {
    const animatedValue = useSharedValue(value);
    
    const animate = (sequence: number[]) => {
      const timingConfig = {
        duration: config?.duration || 300,
        easing: config?.easing || Easing.bezier(0.4, 0, 0.2, 1),
      };
      
      const sequenceWithTiming = sequence.map((value, index) => {
        if (index === 0) {
          return withTiming(value, timingConfig);
        }
        return withDelay(
          config?.delay || 0,
          withTiming(value, timingConfig)
        );
      });
      
      animatedValue.value = withSequence(...sequenceWithTiming);
    };
    
    return { animatedValue, animate };
  };
  
  return {
    createSpringAnimation,
    createTimingAnimation,
    createSequenceAnimation,
  };
} 