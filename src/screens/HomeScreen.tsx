import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  Platform,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native';
import { useTheme } from '@/theme/ThemeProvider';
import { useCampaign } from '@/state/campaignStore';
import { AppText } from '@/ui/AppText';
import { CartBadge } from '@/ui/CartBadge';
import { BlockErrorBoundary } from '@/ui/ErrorBoundary';
import { CampaignOverlay } from '@/components/CampaignOverlay';
import { renderBlock } from '@/registry/registry';
import { handleAction } from '@/dispatcher/handleAction';
import { isKnownBlock } from '@/utils/typeGuards';
import { spacing, radius, elevation, neutral } from '@/theme/tokens';
import type { KnownBlock, RawBlock, OnAction } from '@/types/sdui';

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

interface HeaderProps {
  campaignLabel: string;
  onSwitchCampaign: () => void;
}

/** Sticky header with Kiddo logo, cart badge, and campaign switcher. */
const Header = React.memo(function Header({ campaignLabel, onSwitchCampaign }: HeaderProps) {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.header,
        {
          backgroundColor: theme.surface,
          borderBottomColor: theme.divider,
        },
      ]}
    >
      {/* Logo */}
      <View style={styles.logo}>
        <View style={[styles.logoDot, { backgroundColor: theme.primary }]} />
        <AppText variant="xl" weight="extrabold" color="primary">
          kiddo
        </AppText>
      </View>

      <View style={styles.headerRight}>
        {/* Campaign switcher pill */}
        <Pressable
          onPress={onSwitchCampaign}
          style={[
            styles.campaignPill,
            { backgroundColor: theme.primary },
          ]}
          accessibilityLabel={`Switch campaign, current: ${campaignLabel}`}
          accessibilityRole="button"
        >
          <AppText
            style={{
              fontSize: 11,
              fontWeight: '600',
              color: theme.ctaText,
              maxWidth: 110,
            }}
            numberOfLines={1}
          >
            🎨 {campaignLabel}
          </AppText>
        </Pressable>

        {/* Cart icon + badge */}
        <View style={styles.cartWrapper}>
          <AppText style={{ fontSize: 22 }}>🛒</AppText>
          <CartBadge />
        </View>
      </View>
    </View>
  );
});

// ---------------------------------------------------------------------------
// HomeScreen
// ---------------------------------------------------------------------------

/** Root screen — single vertical FlashList rendering the entire SDUI payload. */
export function HomeScreen() {
  const theme = useTheme();
  const { payload, activeCampaign, nextCampaign } = useCampaign();

  const flatListRef = useRef<FlatList<KnownBlock>>(null);

  // Scroll to top whenever the active campaign changes
  useEffect(() => {
    flatListRef.current?.scrollToOffset({ offset: 0, animated: false });
  }, [activeCampaign.id]);

  // Stable onAction callback — doesn't change between renders
  const onAction: OnAction = useCallback(handleAction, []);

  // Filter out unknown block types before FlashList sees them
  const knownBlocks = useMemo<KnownBlock[]>(
    () =>
      payload.blocks.reduce<KnownBlock[]>((acc, b) => {
        if (isKnownBlock(b)) {
          acc.push(b);
        } else if (__DEV__) {
          console.log(`[HomeScreen] Dropped unknown block type: "${b.type}" (id: ${b.id})`);
        }
        return acc;
      }, []),
    [payload.blocks],
  );

  const keyExtractor = useCallback((item: KnownBlock) => item.id, []);

  const renderItem = useCallback(
    ({ item }: { item: KnownBlock }) => (
      <BlockErrorBoundary blockId={item.id}>
        {renderBlock(item, onAction) ?? <View />}
      </BlockErrorBoundary>
    ),
    [onAction],
  );

  return (
    <View style={[styles.root, { backgroundColor: theme.background }]}>
      <SafeAreaView style={styles.safeArea}>
        {/* Sticky header — rendered above FlashList, not inside it */}
        <Header
          campaignLabel={activeCampaign.label}
          onSwitchCampaign={nextCampaign}
        />

        {/* Single vertical FlatList — the entire layout lives here */}
        <FlatList
          ref={flatListRef}
          data={knownBlocks}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
          removeClippedSubviews
        />
      </SafeAreaView>

      {/* Full-screen campaign overlay — absolutely positioned, pointerEvents=none */}
      {payload.overlay !== undefined && (
        <CampaignOverlay
          key={activeCampaign.id}
          overlay={payload.overlay}
        />
      )}
    </View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const STATUSBAR_HEIGHT =
  Platform.OS === 'android' ? (StatusBar.currentHeight ?? 0) : 0;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    paddingTop: STATUSBAR_HEIGHT,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderBottomWidth: StyleSheet.hairlineWidth,
    ...elevation.card,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xxs,
  },
  logoDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  campaignPill: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xxs,
    borderRadius: radius.full,
    maxWidth: 150,
  },
  cartWrapper: {
    position: 'relative',
    padding: spacing.xxs,
  },
  listContent: {
    paddingBottom: spacing.xl,
  },
});
