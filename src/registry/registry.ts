import React, { type ComponentType } from 'react';
import { BannerHero } from '@/components/blocks/BannerHero';
import { ProductGrid2x2 } from '@/components/blocks/ProductGrid2x2';
import { DynamicCollection } from '@/components/blocks/DynamicCollection';
import type { BlockType, KnownBlock, OnAction } from '@/types/sdui';

// ---------------------------------------------------------------------------
// Shared props type — every block component satisfies this contract
// ---------------------------------------------------------------------------

/** Common props shape accepted by every block component in the registry. */
export interface AnyBlockProps {
  block: KnownBlock;
  onAction: OnAction;
}

// ---------------------------------------------------------------------------
// Registry — typed hash-map, NEVER a switch statement
// ---------------------------------------------------------------------------

/**
 * Hash-map from BlockType string to its React component.
 * Lookup of an unregistered type returns `undefined` — the caller drops the
 * block silently without crashing the feed.
 */
export const BLOCK_REGISTRY: Record<BlockType, ComponentType<AnyBlockProps>> = {
  BANNER_HERO: BannerHero as ComponentType<AnyBlockProps>,
  PRODUCT_GRID_2X2: ProductGrid2x2 as ComponentType<AnyBlockProps>,
  DYNAMIC_COLLECTION: DynamicCollection as ComponentType<AnyBlockProps>,
};

// ---------------------------------------------------------------------------
// Render helper
// ---------------------------------------------------------------------------

/**
 * Resolves the block type in the registry and returns the rendered React element,
 * or null for unknown types. Unknown blocks never reach renderItem in the feed.
 */
export function renderBlock(block: KnownBlock, onAction: OnAction): React.ReactElement | null {
  const Component = (BLOCK_REGISTRY as Record<string, ComponentType<AnyBlockProps> | undefined>)[
    block.type
  ];
  if (Component === undefined) return null;
  return React.createElement(Component, { block, onAction });
}
