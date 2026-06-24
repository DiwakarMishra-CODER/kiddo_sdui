import React, { useCallback } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useTheme } from '@/theme/ThemeProvider';
import { AppText } from '@/ui/AppText';
import { ProductCard } from './ProductCard';
import { spacing } from '@/theme/tokens';
import type { DynamicCollectionBlock, OnAction, Product } from '@/types/sdui';

interface DynamicCollectionProps {
  block: DynamicCollectionBlock;
  onAction: OnAction;
}

const CARD_WIDTH = 160;
const CARD_HEIGHT = 260;

/** Horizontal scrolling product carousel — nested inside the vertical FlashList. */
export const DynamicCollection = React.memo(function DynamicCollection({
  block,
  onAction,
}: DynamicCollectionProps) {
  const theme = useTheme();
  const accentColor = block.accentColor ?? theme.primary;

  const keyExtractor = useCallback((item: Product) => item.id, []);

  const renderItem = useCallback(
    ({ item }: { item: Product }) => (
      <View style={styles.cardWrapper}>
        <ProductCard product={item} onAction={onAction} width={CARD_WIDTH} />
      </View>
    ),
    [onAction],
  );

  return (
    <View style={[styles.container, { marginVertical: spacing.xs }]}>
      {/* Section header */}
      <View style={[styles.header, { marginHorizontal: spacing.md }]}>
        <View style={[styles.accent, { backgroundColor: accentColor }]} />
        <View style={styles.headerText}>
          <AppText variant="lg" weight="bold" color="primary">
            {block.title}
          </AppText>
          {block.subtitle !== undefined && (
            <AppText variant="xs" color="muted" style={styles.subtitle}>
              {block.subtitle}
            </AppText>
          )}
        </View>
      </View>

      {/* Horizontal carousel — nestedScrollEnabled ensures no vertical scroll conflict */}
      <FlatList
        data={block.products}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        nestedScrollEnabled
        directionalLockEnabled
        removeClippedSubviews
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.sm,
  },
  accent: {
    width: 4,
    height: 22,
    borderRadius: 2,
    marginRight: spacing.xs,
  },
  headerText: {
    flex: 1,
  },
  subtitle: {
    marginTop: 2,
  },
  cardWrapper: {
    marginRight: spacing.xs,
  },
  listContent: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.xs,
  },
});
