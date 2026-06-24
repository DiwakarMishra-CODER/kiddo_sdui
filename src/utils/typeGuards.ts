import type {
  RawBlock,
  KnownBlock,
  BannerHeroBlock,
  ProductGrid2x2Block,
  DynamicCollectionBlock,
  Product,
} from '@/types/sdui';

/** Cast a RawBlock to an unknown-keyed record for safe property probing. */
function asRecord(block: RawBlock): Record<string, unknown> {
  return block as unknown as Record<string, unknown>;
}

/** Narrows a RawBlock to a KnownBlock if the type is one we recognise. */
export function isKnownBlock(block: RawBlock): block is KnownBlock {
  return (
    block.type === 'BANNER_HERO' ||
    block.type === 'PRODUCT_GRID_2X2' ||
    block.type === 'DYNAMIC_COLLECTION'
  );
}

/** Narrows a RawBlock to a BannerHeroBlock with minimal structural validation. */
export function isBannerHeroBlock(block: RawBlock): block is BannerHeroBlock {
  const r = asRecord(block);
  return (
    block.type === 'BANNER_HERO' &&
    typeof r['imageUrl'] === 'string' &&
    typeof r['title'] === 'string'
  );
}

/** Narrows a RawBlock to a ProductGrid2x2Block. */
export function isProductGrid2x2Block(block: RawBlock): block is ProductGrid2x2Block {
  const r = asRecord(block);
  const products = r['products'];
  return (
    block.type === 'PRODUCT_GRID_2X2' &&
    Array.isArray(products) &&
    (products as unknown[]).length === 4
  );
}

/** Narrows a RawBlock to a DynamicCollectionBlock. */
export function isDynamicCollectionBlock(block: RawBlock): block is DynamicCollectionBlock {
  const r = asRecord(block);
  return (
    block.type === 'DYNAMIC_COLLECTION' &&
    typeof r['title'] === 'string' &&
    Array.isArray(r['products'])
  );
}

/** Checks if a value is a valid Product shape (shallow validation). */
export function isProduct(value: unknown): value is Product {
  if (typeof value !== 'object' || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v['id'] === 'string' &&
    typeof v['name'] === 'string' &&
    typeof v['price'] === 'number' &&
    typeof v['imageUrl'] === 'string' &&
    typeof v['unit'] === 'string' &&
    typeof v['inStock'] === 'boolean'
  );
}
