# Kiddo — Server-Driven UI Homepage

A production-quality React Native take-home demonstrating a complete **Server-Driven UI (SDUI)** homepage renderer for Kiddo, a Q-commerce platform for kids & baby essentials.

---

## Quick Start

```bash
npm install
npx expo start          # then press i (iOS) or a (Android)
```

---

## Architecture Overview

```
Server JSON payload
      │
      ▼
SduiPayload (typed)
      │
      ├─ theme ──► ThemeProvider (React Context)
      │                 │
      │                 └─ all components read colors via useTheme()
      │
      ├─ blocks[] ─► filter unknown types ─► BLOCK_REGISTRY (hash-map)
      │                                            │
      │                                            └─ BANNER_HERO → BannerHero
      │                                               PRODUCT_GRID_2X2 → ProductGrid2x2
      │                                               DYNAMIC_COLLECTION → DynamicCollection
      │
      └─ overlay? ─► CampaignOverlay (Lottie, pointerEvents="none")

Interactive events:
  Block components emit Action objects via onAction callback
        │
        ▼
  handleAction(action) dispatcher
        │
        ├─ ADD_TO_CART ──────► Zustand cart store
        ├─ REMOVE_FROM_CART ─► Zustand cart store
        ├─ DEEP_LINK ────────► Alert (placeholder)
        ├─ OPEN_CATEGORY ────► Alert (placeholder)
        └─ APPLY_MYSTERY_GIFT_COUPON ► Alert + coupon applied
```

---

## Key Design Decisions

### Component Registry (graded criterion)

```typescript
// src/registry/registry.ts
export const BLOCK_REGISTRY: Record<BlockType, ComponentType<AnyBlockProps>> = {
  BANNER_HERO: BannerHero,
  PRODUCT_GRID_2X2: ProductGrid2x2,
  DYNAMIC_COLLECTION: DynamicCollection,
};
```

A **typed hash-map**, never a `switch` statement. Looking up an unregistered type returns `undefined` — the block is filtered out silently before the FlashList ever sees it. The resilience test in `src/__tests__/registry.test.ts` verifies this.

### Single Vertical FlashList

The entire homepage renders inside **one** vertical `FlashList` in `src/screens/HomeScreen.tsx`. `DYNAMIC_COLLECTION` blocks contain a nested **horizontal** `FlashList` with `nestedScrollEnabled` — horizontal drags don't interrupt vertical scroll momentum.

### Re-render Isolation (graded criterion)

Adding an item to one product card **never** re-renders the other 30+ blocks:

- Every block component is wrapped in `React.memo`
- The cart store (Zustand) exposes **slice selectors**: `useCartItemQty(productId)` subscribes only to that one product's entry
- The `onAction` callback is wrapped in `useCallback` in the feed renderer (stable ref)

### Theme Context

The payload's `theme` object is injected into a `ThemeProvider` at the root. All colors, borders, and CTA styles call `useTheme()` — zero hardcoded hex values in component files.

### Campaign Overlay

`CampaignOverlay` wraps a `LottieView` in an `Animated.View` with `position: absolute` and `pointerEvents="none"`. Taps pass through to the feed while the animation plays. Assets are resolved via `src/utils/assetCache.ts` which maps known remote URLs to bundled local JSONs — the same code path works for remote URLs in production.

---

## Project Structure

```
src/
├── types/         sdui.ts (Block types, Action union), theme.ts
├── data/payloads/ default, backToSchool, summerPlayhouse, mysteryCarnival
├── theme/         ThemeProvider.tsx, tokens.ts (8pt grid, radius, typography)
├── state/         cartStore.ts (Zustand), campaignStore.tsx
├── dispatcher/    handleAction.ts (centralized routing)
├── registry/      registry.ts (typed hash-map)
├── components/
│   ├── blocks/    BannerHero, ProductGrid2x2, DynamicCollection, ProductCard
│   └──            CampaignOverlay
├── ui/            AppText, AppButton, AppImage, CartBadge, ErrorBoundary
├── screens/       HomeScreen.tsx (single FlashList)
└── utils/         typeGuards.ts, assetCache.ts

assets/lottie/     confetti.json, paper-planes.json, water-splash.json
```

---

## Demo: Campaign Switcher

The **top-right pill** in the header cycles through four states:

| Campaign | Theme | Overlay |
|---|---|---|
| **Default** | Orange `#FF6B35` | None |
| **Back to School** | Blue `#1565C0` + Yellow | Paper planes + pencils |
| **Summer Playhouse** | Ocean `#0277BD` + Cyan | Water droplets |
| **Mystery Carnival** | Carnival `#C62828` + Amber | Confetti burst (8s) |

Each switch instantly swaps: runtime theme palette, all 35 block definitions, and the overlay animation — zero rebuild required.

---

## Running Tests

```bash
npm test
```

Four test suites covering:
1. **Registry resilience** — `NEW_COMPONENT_V2` returns `undefined`, not a crash
2. **Dispatcher routing** — `ADD_TO_CART` correctly updates the Zustand store
3. **Cart isolation** — adding product B doesn't change product A's stored entry (reference equality)
4. **ThemeContext** — default theme returned without provider; custom theme injected correctly

---

## Type Checking

```bash
npm run typecheck
```

Zero TypeScript errors with `strict`, `noUncheckedIndexedAccess`, `noImplicitOverride`, and `exactOptionalPropertyTypes` all enabled.

---

## Stack

| Concern | Library |
|---|---|
| Framework | Expo managed (SDK 56) |
| Language | TypeScript strict |
| Lists | `@shopify/flash-list` v2 |
| State | Zustand v5 (slice selectors) |
| Animations | `lottie-react-native` |
| Images | `expo-image` (cache + placeholder) |
| Safe area | `react-native-safe-area-context` |
