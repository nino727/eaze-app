import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { ICONS, IconName } from '../../constants/icons';

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
}

export function Icon({ name, size = 24, color }: IconProps) {
  const iconName = ICONS[name] as keyof typeof Ionicons.glyphMap;
  return <Ionicons name={iconName} size={size} color={color} />;
} 