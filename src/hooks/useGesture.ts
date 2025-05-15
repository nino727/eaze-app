import { useCallback } from 'react';
import { Gesture, GestureDetector, GestureType } from 'react-native-gesture-handler';
import { SharedValue } from 'react-native-reanimated';

interface GestureConfig {
  enabled?: boolean;
  onStart?: () => void;
  onEnd?: () => void;
  onUpdate?: (event: any) => void;
}

export function useGesture() {
  const createPanGesture = (
    translationX: SharedValue<number>,
    translationY: SharedValue<number>,
    config?: GestureConfig
  ) => {
    return Gesture.Pan()
      .enabled(config?.enabled ?? true)
      .onStart(() => {
        config?.onStart?.();
      })
      .onUpdate((event) => {
        translationX.value = event.translationX;
        translationY.value = event.translationY;
        config?.onUpdate?.(event);
      })
      .onEnd(() => {
        config?.onEnd?.();
      });
  };

  const createPinchGesture = (
    scale: SharedValue<number>,
    config?: GestureConfig
  ) => {
    return Gesture.Pinch()
      .enabled(config?.enabled ?? true)
      .onStart(() => {
        config?.onStart?.();
      })
      .onUpdate((event) => {
        scale.value = event.scale;
        config?.onUpdate?.(event);
      })
      .onEnd(() => {
        config?.onEnd?.();
      });
  };

  const createTapGesture = (config?: GestureConfig) => {
    return Gesture.Tap()
      .enabled(config?.enabled ?? true)
      .onStart(() => {
        config?.onStart?.();
      })
      .onEnd(() => {
        config?.onEnd?.();
      });
  };

  const createLongPressGesture = (config?: GestureConfig) => {
    return Gesture.LongPress()
      .enabled(config?.enabled ?? true)
      .minDuration(500)
      .onStart(() => {
        config?.onStart?.();
      })
      .onEnd(() => {
        config?.onEnd?.();
      });
  };

  const composeGestures = (...gestures: GestureType[]) => {
    return Gesture.Simultaneous(...gestures);
  };

  return {
    createPanGesture,
    createPinchGesture,
    createTapGesture,
    createLongPressGesture,
    composeGestures,
  };
} 