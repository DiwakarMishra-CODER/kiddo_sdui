import React, { useCallback } from 'react';
import {
  View,
  Pressable,
  StyleSheet,
  type ViewStyle,
  Animated,
} from 'react-native';
import { useTheme } from '@/theme/ThemeProvider';
import { AppImage } from '@/ui/AppImage';
import { AppText } from '@/ui/AppText';
import { useCartItemQty } from '@/state/cartStore';
import { spacing, radius, fontSize, fontWeight, elevation, neutral } from '@/theme/tokens';
import type { Product, OnAction } from '@/types/sdui';

interface ProductCardProps {
  product: Product;
  onAction: OnAction;
  width?: number;
}

/** Product card — reads only its own cart qty via slice selector to avoid re-renders. */
export const ProductCard = React.memo(function ProductCard({
  product,
  onAction,
  width = 160,
}: ProductCardProps) {
  const theme = useTheme();
  const qty = useCartItemQty(product.id);
  const scale = React.useRef(new Animated.Value(1)).current;

  const handlePressIn = useCallback(() => {
    Animated.spring(scale, { toValue: 0.97, useNativeDriver: true, speed: 50, bounciness: 0 }).start();
  }, [scale]);

  const handlePressOut = useCallback(() => {
    Animated.spring(scale, { toValue: 1, useNativeDriver: true, speed: 30, bounciness: 2 }).start();
  }, [scale]);

  const handleAdd = useCallback(() => {
    if (product.action) {
      onAction(product.action);
    } else {
      onAction({ type: 'ADD_TO_CART', payload: { productId: product.id, quantity: 1 } });
    }
  }, [onAction, product.id, product.action]);

  const handleRemove = useCallback(() => {
    onAction({ type: 'REMOVE_FROM_CART', payload: { productId: product.id } });
  }, [onAction, product.id]);

  const cardStyle: ViewStyle = {
    width,
    backgroundColor: theme.surface,
    borderRadius: radius.lg,
    overflow: 'hidden',
    ...elevation.card,
  };

  const discount = product.discountLabel;

  return (
    <Animated.View style={[cardStyle, { transform: [{ scale }] }]}>
      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={handleAdd}
        accessible
        accessibilityLabel={`${product.name}, ₹${product.price}`}
        accessibilityRole="button"
      >
        {/* Image area */}
        <View style={styles.imageContainer}>
          <AppImage uri={product.imageUrl} width={width} height={width * 0.75} borderRadius={0} />

          {/* Discount badge */}
          {discount !== undefined && (
            <View style={[styles.discountBadge, { backgroundColor: theme.primary }]}>
              <AppText
                style={{ fontSize: fontSize.xs, fontWeight: fontWeight.bold, color: theme.ctaText }}
              >
                {discount}
              </AppText>
            </View>
          )}

          {/* Badge pill (New / Best Seller) */}
          {product.badge !== undefined && (
            <View style={[styles.badgePill, { backgroundColor: theme.badge }]}>
              <AppText
                style={{ fontSize: 10, fontWeight: fontWeight.semibold, color: theme.badgeText }}
              >
                {product.badge}
              </AppText>
            </View>
          )}
        </View>

        {/* Details area */}
        <View style={styles.details}>
          <AppText
            variant="sm"
            weight="medium"
            color="primary"
            numberOfLines={2}
            style={styles.name}
          >
            {product.name}
          </AppText>

          <AppText variant="xs" color="muted" style={styles.unit}>
            {product.unit}
          </AppText>

          <View style={styles.priceRow}>
            <AppText
              style={{
                fontSize: fontSize.md,
                fontWeight: fontWeight.bold,
                color: theme.textPrimary,
              }}
            >
              ₹{product.price}
            </AppText>

            {product.originalPrice !== undefined && (
              <AppText
                style={{
                  fontSize: fontSize.xs,
                  color: theme.textSecondary,
                  textDecorationLine: 'line-through',
                  marginLeft: spacing.xxs,
                }}
              >
                ₹{product.originalPrice}
              </AppText>
            )}
          </View>

          {/* Add / Qty controls */}
          {qty === 0 ? (
            <View style={[styles.addBtn, { backgroundColor: theme.primary }]}>
              <AppText
                style={{ fontSize: fontSize.sm, fontWeight: fontWeight.bold, color: theme.ctaText }}
              >
                {product.action ? '→ View' : '+ ADD'}
              </AppText>
            </View>
          ) : (
            <View style={[styles.qtyRow, { borderColor: theme.primary }]}>
              <Pressable onPress={handleRemove} style={styles.qtyBtn} accessibilityRole="button">
                <AppText
                  style={{ fontSize: fontSize.lg, fontWeight: fontWeight.bold, color: theme.primary }}
                >
                  −
                </AppText>
              </Pressable>

              <AppText
                style={{ fontSize: fontSize.md, fontWeight: fontWeight.bold, color: theme.primary }}
              >
                {qty}
              </AppText>

              <Pressable onPress={handleAdd} style={styles.qtyBtn} accessibilityRole="button">
                <AppText
                  style={{ fontSize: fontSize.lg, fontWeight: fontWeight.bold, color: theme.primary }}
                >
                  +
                </AppText>
              </Pressable>
            </View>
          )}
        </View>
      </Pressable>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
  },
  discountBadge: {
    position: 'absolute',
    top: spacing.xxs,
    left: spacing.xxs,
    paddingHorizontal: spacing.xxs,
    paddingVertical: 2,
    borderRadius: radius.sm,
  },
  badgePill: {
    position: 'absolute',
    top: spacing.xxs,
    right: spacing.xxs,
    paddingHorizontal: spacing.xxs,
    paddingVertical: 2,
    borderRadius: radius.full,
  },
  details: {
    padding: spacing.xs,
    gap: spacing.xxs,
  },
  name: {
    minHeight: 36,
  },
  unit: {
    marginBottom: 2,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  addBtn: {
    marginTop: spacing.xxs,
    paddingVertical: spacing.xxs + 2,
    borderRadius: radius.sm,
    alignItems: 'center',
  },
  qtyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: spacing.xxs,
    borderWidth: 1.5,
    borderRadius: radius.sm,
    paddingHorizontal: spacing.xs,
    paddingVertical: 3,
  },
  qtyBtn: {
    paddingHorizontal: spacing.xxs,
    paddingVertical: 1,
  },
});
