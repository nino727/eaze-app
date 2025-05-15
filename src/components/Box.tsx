import React from 'react';
import { View, ViewProps, StyleSheet, DimensionValue } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../theme/theme';

interface BoxProps extends ViewProps {
  backgroundColor?: keyof Theme['colors'];
  padding?: keyof Theme['spacing'];
  paddingHorizontal?: keyof Theme['spacing'];
  paddingVertical?: keyof Theme['spacing'];
  margin?: keyof Theme['spacing'];
  marginTop?: keyof Theme['spacing'];
  marginBottom?: keyof Theme['spacing'];
  marginLeft?: keyof Theme['spacing'];
  marginRight?: keyof Theme['spacing'];
  borderRadius?: keyof Theme['borderRadii'];
  borderWidth?: number;
  borderColor?: keyof Theme['colors'];
  borderBottomWidth?: number;
  borderBottomColor?: keyof Theme['colors'];
  flex?: number;
  flexDirection?: 'row' | 'column';
  alignItems?: 'flex-start' | 'center' | 'flex-end';
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
  width?: DimensionValue;
  height?: DimensionValue;
  opacity?: number;
}

export const Box: React.FC<BoxProps> = ({
  backgroundColor,
  padding,
  paddingHorizontal,
  paddingVertical,
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  borderRadius,
  borderWidth,
  borderColor,
  borderBottomWidth,
  borderBottomColor,
  flex,
  flexDirection,
  alignItems,
  justifyContent,
  width,
  height,
  opacity,
  style,
  ...props
}) => {
  const theme = useTheme<Theme>();

  const styles = StyleSheet.create({
    box: {
      backgroundColor: backgroundColor ? theme.colors[backgroundColor] : undefined,
      padding: padding ? theme.spacing[padding] : undefined,
      paddingHorizontal: paddingHorizontal ? theme.spacing[paddingHorizontal] : undefined,
      paddingVertical: paddingVertical ? theme.spacing[paddingVertical] : undefined,
      margin: margin ? theme.spacing[margin] : undefined,
      marginTop: marginTop ? theme.spacing[marginTop] : undefined,
      marginBottom: marginBottom ? theme.spacing[marginBottom] : undefined,
      marginLeft: marginLeft ? theme.spacing[marginLeft] : undefined,
      marginRight: marginRight ? theme.spacing[marginRight] : undefined,
      borderRadius: borderRadius ? theme.borderRadii[borderRadius] : undefined,
      borderWidth,
      borderColor: borderColor ? theme.colors[borderColor] : undefined,
      borderBottomWidth,
      borderBottomColor: borderBottomColor ? theme.colors[borderBottomColor] : undefined,
      flex,
      flexDirection,
      alignItems,
      justifyContent,
      width,
      height,
      opacity,
    },
  });

  return <View style={[styles.box, style]} {...props} />;
}; 