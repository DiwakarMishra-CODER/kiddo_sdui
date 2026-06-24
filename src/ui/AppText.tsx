import React from 'react';
import { Text, type TextProps, type TextStyle } from 'react-native';
import { useTheme } from '@/theme/ThemeProvider';
import { fontSize, fontWeight, lineHeight } from '@/theme/tokens';

type Variant =
  | 'display'
  | 'xxl'
  | 'xl'
  | 'lg'
  | 'md'
  | 'sm'
  | 'xs';

type Weight = keyof typeof fontWeight;
type Color = 'primary' | 'secondary' | 'muted' | 'inverted';

interface AppTextProps extends TextProps {
  variant?: Variant;
  weight?: Weight;
  color?: Color;
}

/** Typed text primitive — all font sizes and colors come from tokens/theme. */
export function AppText({
  variant = 'md',
  weight = 'regular',
  color = 'primary',
  style,
  ...rest
}: AppTextProps) {
  const theme = useTheme();

  const colorMap: Record<Color, string> = {
    primary: theme.textPrimary,
    secondary: theme.secondary,
    muted: theme.textSecondary,
    inverted: theme.ctaText,
  };

  const textStyle: TextStyle = {
    fontSize: fontSize[variant === 'display' ? 'display' : variant],
    fontWeight: fontWeight[weight],
    color: colorMap[color],
    lineHeight:
      fontSize[variant === 'display' ? 'display' : variant] *
      (variant === 'display' || variant === 'xxl' ? lineHeight.tight : lineHeight.normal),
  };

  return <Text style={[textStyle, style]} {...rest} />;
}
