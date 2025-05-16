import { createTheme } from '@shopify/restyle';

const palette = {
  purple: '#5A31F4',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#8E8E93',
  grayLight: '#D1D1D6',
  grayDark: '#1C1C1E',
  success: '#34C759',
  error: '#FF3B30',
  warning: '#FF9500',
  info: '#007AFF',
};

export const theme = createTheme({
  colors: {
    primary: palette.purple,
    secondary: palette.gray,
    background: palette.white,
    backgroundAlt: palette.grayLight,
    cardBackground: palette.white,
    text: palette.black,
    textSecondary: palette.gray,
    accent1: palette.success,
    accent2: palette.error,
    success: palette.success,
    error: palette.error,
    warning: palette.warning,
    info: palette.info,
    border: palette.grayLight,
    black: palette.black,
    white: palette.white,
  },
  spacing: {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 40,
  },
  borderRadii: {
    xs: 4,
    s: 8,
    m: 12,
    l: 16,
    xl: 24,
    xxl: 32,
  },
  textVariants: {
    header: {
      fontSize: 34,
      fontWeight: 'bold',
    },
    subheader: {
      fontSize: 28,
      fontWeight: '600',
    },
    body: {
      fontSize: 16,
    },
    caption: {
      fontSize: 14,
      color: 'textSecondary',
    },
  },
});

export type Theme = typeof theme;
export default theme; 