import React, { useCallback } from 'react';
import {
  Pressable,
  type PressableProps,
  type ViewStyle,
  type TextStyle,
  Animated,
} from 'react-native';
import { useTheme } from '@/theme/ThemeProvider';
import { radius, spacing, fontSize, fontWeight } from '@/theme/tokens';
import { AppText } from './AppText';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface AppButtonProps extends Omit<PressableProps, 'style'> {
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const sizeMap: Record<ButtonSize, { paddingH: number; paddingV: number; fs: number }> = {
  sm: { paddingH: spacing.sm, paddingV: spacing.xxs, fs: fontSize.sm },
  md: { paddingH: spacing.md, paddingV: spacing.xs, fs: fontSize.md },
  lg: { paddingH: spacing.lg, paddingV: spacing.sm, fs: fontSize.lg },
};

/** Pressable button with scale feedback, themed colors, and consistent sizing. */
export function AppButton({
  label,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  onPress,
  disabled,
  ...rest
}: AppButtonProps) {
  const theme = useTheme();
  const scale = React.useRef(new Animated.Value(1)).current;

  const handlePressIn = useCallback(() => {
    Animated.spring(scale, {
      toValue: 0.96,
      useNativeDriver: true,
      speed: 50,
      bounciness: 0,
    }).start();
  }, [scale]);

  const handlePressOut = useCallback(() => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 30,
      bounciness: 2,
    }).start();
  }, [scale]);

  const bgMap: Record<ButtonVariant, string> = {
    primary: theme.primary,
    secondary: theme.secondary,
    ghost: 'transparent',
  };

  const textColorMap: Record<ButtonVariant, string> = {
    primary: theme.ctaText,
    secondary: theme.textPrimary,
    ghost: theme.primary,
  };

  const dim = sizeMap[size];

  const containerStyle: ViewStyle = {
    backgroundColor: bgMap[variant],
    paddingHorizontal: dim.paddingH,
    paddingVertical: dim.paddingV,
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: disabled === true ? 0.5 : 1,
    ...(fullWidth && { alignSelf: 'stretch' }),
    ...(variant === 'ghost' && {
      borderWidth: 1.5,
      borderColor: theme.primary,
    }),
  };

  const textStyle: TextStyle = {
    fontSize: dim.fs,
    fontWeight: fontWeight.semibold,
    color: textColorMap[variant],
  };

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Pressable
        style={containerStyle}
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={disabled}
        {...rest}
      >
        <AppText style={textStyle}>{label}</AppText>
      </Pressable>
    </Animated.View>
  );
}
