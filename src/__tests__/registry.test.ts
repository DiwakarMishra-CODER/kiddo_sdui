/**
 * Test: Component registry returns undefined for unknown block types
 * and correctly resolves all known types.
 */
import { BLOCK_REGISTRY } from '../registry/registry';
import type { BlockType } from '../types/sdui';

describe('BLOCK_REGISTRY', () => {
  it('resolves all known block types to a component', () => {
    const knownTypes: BlockType[] = ['BANNER_HERO', 'PRODUCT_GRID_2X2', 'DYNAMIC_COLLECTION'];
    for (const type of knownTypes) {
      const component = BLOCK_REGISTRY[type];
      expect(component).toBeDefined();
      // React.memo wraps components in an object ($$typeof), plain components are functions
      const isValidComponent =
        typeof component === 'function' || typeof component === 'object';
      expect(isValidComponent).toBe(true);
    }
  });

  it('returns undefined for an unknown block type (resilience check)', () => {
    // Cast needed to simulate a server sending an unexpected type
    const unknownType = 'NEW_COMPONENT_V2' as BlockType;
    const component = (BLOCK_REGISTRY as Record<string, unknown>)[unknownType];
    expect(component).toBeUndefined();
  });
});
