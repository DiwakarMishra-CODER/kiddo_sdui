import type { Theme } from './theme';

// ---------------------------------------------------------------------------
// Primitive types
// ---------------------------------------------------------------------------

/** A product catalog item used inside grid and carousel blocks. */
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  unit: string;
  /** Optional discount label shown on the card (e.g. "20% OFF"). */
  discountLabel?: string;
  /** Optional badge (e.g. "New", "Best Seller"). */
  badge?: string;
  inStock: boolean;
  /** Override the default ADD_TO_CART action for this product (e.g. OPEN_CATEGORY for tickets). */
  action?: Action;
}

// ---------------------------------------------------------------------------
// Action contract
// ---------------------------------------------------------------------------

/** Every interactive element emits one of these discriminated-union action objects. */
export type Action =
  | { type: 'ADD_TO_CART'; payload: { productId: string; quantity: number } }
  | { type: 'REMOVE_FROM_CART'; payload: { productId: string } }
  | { type: 'DEEP_LINK'; payload: { url: string } }
  | { type: 'OPEN_CATEGORY'; payload: { categoryId: string; title: string } }
  | { type: 'APPLY_MYSTERY_GIFT_COUPON'; payload: { couponCode: string } };

/** Convenience alias for the callback signature passed to every block component. */
export type OnAction = (action: Action) => void;

// ---------------------------------------------------------------------------
// Block types
// ---------------------------------------------------------------------------

/** Union of all known server-defined block type strings. */
export type BlockType =
  | 'BANNER_HERO'
  | 'PRODUCT_GRID_2X2'
  | 'DYNAMIC_COLLECTION';

/** A BANNER_HERO block renders a full-width promotional hero card. */
export interface BannerHeroBlock {
  id: string;
  type: 'BANNER_HERO';
  imageUrl: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  action?: Action;
  /** Optional background color override (falls back to theme). */
  backgroundColor?: string;
}

/** A PRODUCT_GRID_2X2 block renders a 2×2 grid of product cards. */
export interface ProductGrid2x2Block {
  id: string;
  type: 'PRODUCT_GRID_2X2';
  title?: string;
  products: [Product, Product, Product, Product];
}

/** A DYNAMIC_COLLECTION block renders a titled horizontal scrolling carousel. */
export interface DynamicCollectionBlock {
  id: string;
  type: 'DYNAMIC_COLLECTION';
  /** Collection title shown above the carousel (e.g. "Summer Essentials"). */
  title: string;
  /** Optional subtitle shown below the title. */
  subtitle?: string;
  /** Optional accent color override for the section header. */
  accentColor?: string;
  products: Product[];
}

/** Discriminated union of all known block shapes. */
export type KnownBlock =
  | BannerHeroBlock
  | ProductGrid2x2Block
  | DynamicCollectionBlock;

/**
 * Raw block as parsed from JSON — type may be unknown.
 * KnownBlock types structurally extend this (they have id + type), so type predicates hold.
 */
export interface RawBlock {
  id: string;
  type: string;
}

// ---------------------------------------------------------------------------
// Campaign overlay
// ---------------------------------------------------------------------------

/** A full-screen animation overlay emitted by campaign payloads. */
export interface OverlayConfig {
  /** Remote or local Lottie asset URL. The asset cache resolves local-bundled files. */
  animationUrl: string;
  /** Loop the animation? Defaults to true. */
  loop?: boolean;
  /** Auto-dismiss after this many ms. Undefined = stays until campaign changes. */
  autoDismissMs?: number;
}

// ---------------------------------------------------------------------------
// SDUI Payload
// ---------------------------------------------------------------------------

/** The root payload delivered by the server (or campaign mock). */
export interface SduiPayload {
  /** Unique payload version used for cache-busting and key stability. */
  version: string;
  /** Active campaign id. `null` = default homepage. */
  campaignId: string | null;
  /** Runtime theme palette — injected into ThemeProvider. */
  theme: Theme;
  /** Ordered list of blocks to render. Unknown types are silently dropped. */
  blocks: RawBlock[];
  /** Optional full-screen overlay for this payload. */
  overlay?: OverlayConfig;
}

// ---------------------------------------------------------------------------
// Campaign descriptor
// ---------------------------------------------------------------------------

/** Metadata for a campaign entry in the debug switcher. */
export interface CampaignMeta {
  id: string;
  label: string;
  payload: SduiPayload;
}
