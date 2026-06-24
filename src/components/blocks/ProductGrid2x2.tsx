import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { useTheme } from '@/theme/ThemeProvider';
import { AppText } from '@/ui/AppText';
import { ProductCard } from './ProductCard';
import { spacing, radius } from '@/theme/tokens';
import type { ProductGrid2x2Block, OnAction } from '@/types/sdui';

interface ProductGrid2x2Props {
  block: ProductGrid2x2Block;
  onAction: OnAction;
}

const SCREEN_WIDTH = Dimensions.get('window').width;
const CARD_WIDTH = Math.floor((SCREEN_WIDTH - spacing.md * 2 - spacing.xs) / 2);

/** 2×2 grid of product cards with optional section title. */
export const ProductGrid2x2 = React.memo(function ProductGrid2x2({
  block,
  onAction,
}: ProductGrid2x2Props) {
  const theme = useTheme();
  const [p0, p1, p2, p3] = block.products;

  return (
    <View
      style={[
        styles.container,
        { marginHorizontal: spacing.md, marginVertical: spacing.xs },
      ]}
    >
      {block.title !== undefined && (
        <AppText
          variant="lg"
          weight="bold"
          color="primary"
          style={{ marginBottom: spacing.sm }}
        >
          {block.title}
        </AppText>
      )}

      <View style={styles.grid}>
        <ProductCard product={p0} onAction={onAction} width={CARD_WIDTH} />
        <ProductCard product={p1} onAction={onAction} width={CARD_WIDTH} />
        <ProductCard product={p2} onAction={onAction} width={CARD_WIDTH} />
        <ProductCard product={p3} onAction={onAction} width={CARD_WIDTH} />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {},
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
  },
});
