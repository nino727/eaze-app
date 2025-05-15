import { createTheme } from '@shopify/restyle';

const palette = {
  purpleLight: '#8A6FDF',
  purplePrimary: '#5E35B1',
  purpleDark: '#4527A0',
  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',
  black: '#0B0B0B',
  white: '#F0F2F3',
  gray50: '#F9FAFB',
  gray100: '#F3F4F6',
  gray200: '#E5E7EB',
  gray300: '#D1D5DB',
  gray400: '#9CA3AF',
  gray500: '#6B7280',
  gray600: '#4B5563',
  gray700: '#374151',
  gray800: '#1F2937',
  gray900: '#111827',
};

export const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
    success: palette.greenPrimary,
    error: '#FF4B4B',
    text: palette.black,
    textSecondary: palette.gray600,
    primary: palette.purplePrimary,
    secondary: palette.purpleLight,
    accent1: palette.greenPrimary,
    accent2: palette.greenLight,
    background: palette.white,
    gray50: palette.gray50,
    gray100: palette.gray100,
    gray200: palette.gray200,
    gray300: palette.gray300,
    gray400: palette.gray400,
    gray500: palette.gray500,
    gray600: palette.gray600,
    gray700: palette.gray700,
    gray800: palette.gray800,
    gray900: palette.gray900,
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
    round: 9999,
  },
  textVariants: {
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'text',
    },
    subheader: {
      fontSize: 20,
      fontWeight: '600',
      color: 'text',
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
      color: 'text',
    },
    body: {
      fontSize: 16,
      color: 'text',
    },
    caption: {
      fontSize: 14,
      color: 'textSecondary',
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: palette.gray900,
    text: palette.white,
  },
}; 