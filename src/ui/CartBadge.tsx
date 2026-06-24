import React from 'react';
import { View, StyleSheet, type ViewStyle } from 'react-native';
import { useTheme } from '@/theme/ThemeProvider';
import { useCartTotalCount } from '@/state/cartStore';
import { AppText } from './AppText';
import { spacing, radius, fontSize, fontWeight } from '@/theme/tokens';

/** Cart item count badge — subscribes only to total count to avoid over-rendering. */
export function CartBadge() {
  const theme = useTheme();
  const count = useCartTotalCount();

  if (count === 0) return null;

  const badgeStyle: ViewStyle = {
    position: 'absolute',
    top: -6,
    right: -8,
    minWidth: 18,
    height: 18,
    borderRadius: radius.full,
    backgroundColor: theme.badge,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xxs,
  };

  return (
    <View style={badgeStyle}>
      <AppText
        style={{
          fontSize: fontSize.xs,
          fontWeight: fontWeight.bold,
          color: theme.badgeText,
          lineHeight: 14,
        }}
      >
        {count > 99 ? '99+' : String(count)}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
});
