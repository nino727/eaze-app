import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface SafeAreaInsets {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export function useSafeArea() {
  const insets = useSafeAreaInsets();

  const getSafeAreaStyle = (options: {
    edges?: Array<'top' | 'right' | 'bottom' | 'left'>;
    padding?: boolean;
  } = {}) => {
    const { edges = ['top', 'right', 'bottom', 'left'], padding = true } = options;
    const style: Record<string, number> = {};

    edges.forEach((edge) => {
      const value = insets[edge];
      if (value > 0) {
        style[padding ? `padding${edge.charAt(0).toUpperCase() + edge.slice(1)}` : `margin${edge.charAt(0).toUpperCase() + edge.slice(1)}`] = value;
      }
    });

    return style;
  };

  const getSafeAreaInsets = (): SafeAreaInsets => {
    return {
      top: insets.top,
      right: insets.right,
      bottom: insets.bottom,
      left: insets.left,
    };
  };

  return {
    insets,
    getSafeAreaStyle,
    getSafeAreaInsets,
  };
} 