import React, { useCallback } from 'react';
import { View, Pressable, StyleSheet, Dimensions } from 'react-native';
import { useTheme } from '@/theme/ThemeProvider';
import { AppImage } from '@/ui/AppImage';
import { AppText } from '@/ui/AppText';
import { AppButton } from '@/ui/AppButton';
import { spacing, radius, elevation } from '@/theme/tokens';
import type { BannerHeroBlock, OnAction } from '@/types/sdui';

interface BannerHeroProps {
  block: BannerHeroBlock;
  onAction: OnAction;
}

const SCREEN_WIDTH = Dimensions.get('window').width;
const BANNER_HEIGHT = Math.round(SCREEN_WIDTH * 0.45);

/** Full-width hero banner — the top-of-fold promotional card. */
export const BannerHero = React.memo(function BannerHero({ block, onAction }: BannerHeroProps) {
  const theme = useTheme();

  const handlePress = useCallback(() => {
    if (block.action) onAction(block.action);
  }, [block.action, onAction]);

  const bg = block.backgroundColor ?? theme.primary;

  return (
    <View
      style={[
        styles.container,
        {
          marginHorizontal: spacing.md,
          marginVertical: spacing.xs,
          borderRadius: radius.xl,
          overflow: 'hidden',
          backgroundColor: bg,
          ...elevation.card,
        },
      ]}
    >
      <AppImage
        uri={block.imageUrl}
        width={SCREEN_WIDTH - spacing.md * 2}
        height={BANNER_HEIGHT}
        borderRadius={0}
      />

      {/* Gradient-like overlay using a semi-transparent view */}
      <View style={[styles.overlay, { backgroundColor: 'rgba(0,0,0,0.32)' }]} />

      <View style={styles.content}>
        <AppText
          variant="xxl"
          weight="extrabold"
          style={{ color: '#FFFFFF', marginBottom: spacing.xxs }}
        >
          {block.title}
        </AppText>

        {block.subtitle !== undefined && (
          <AppText
            variant="sm"
            style={{ color: 'rgba(255,255,255,0.88)', marginBottom: spacing.sm }}
          >
            {block.subtitle}
          </AppText>
        )}

        {block.ctaLabel !== undefined && block.action !== undefined && (
          <Pressable onPress={handlePress} accessible accessibilityRole="button">
            <View
              style={[
                styles.ctaBtn,
                { backgroundColor: theme.surface, borderRadius: radius.full },
              ]}
            >
              <AppText
                style={{
                  color: theme.primary,
                  fontWeight: '700',
                  fontSize: 14,
                  paddingHorizontal: spacing.md,
                  paddingVertical: spacing.xxs + 2,
                }}
              >
                {block.ctaLabel}
              </AppText>
            </View>
          </Pressable>
        )}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: spacing.md,
  },
  ctaBtn: {
    alignSelf: 'flex-start',
  },
});
