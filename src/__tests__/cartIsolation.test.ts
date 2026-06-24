/**
 * Test: Cart store isolation — adding product B does not change product A's slice.
 * Tests the Zustand store directly, proving the re-render isolation claim at the
 * data layer (Zustand guarantees component re-renders only when subscribed slice changes).
 */
import { useCartStore } from '../state/cartStore';

describe('Cart store isolation', () => {
  beforeEach(() => {
    useCartStore.setState({ items: {} });
  });

  it("adding product B does not modify product A's stored entry", () => {
    // Pre-populate product A
    useCartStore.getState().addItem({ productId: 'product-A', name: 'Product A', price: 99, quantity: 2 });

    const snapshotA = useCartStore.getState().items['product-A'];
    expect(snapshotA?.quantity).toBe(2);

    // Add product B
    useCartStore.getState().addItem({ productId: 'product-B', name: 'Product B', price: 49, quantity: 1 });

    // Product A's entry must be reference-equal — same object, not mutated
    const afterA = useCartStore.getState().items['product-A'];
    expect(afterA).toBe(snapshotA);
    expect(afterA?.quantity).toBe(2);
  });

  it('returns 0 quantity for a product not in the cart', () => {
    const qty = useCartStore.getState().items['not-in-cart']?.quantity ?? 0;
    expect(qty).toBe(0);
  });

  it('removes an item when quantity reaches zero via removeItem', () => {
    useCartStore.getState().addItem({ productId: 'remove-me', name: 'x', price: 10, quantity: 1 });
    useCartStore.getState().removeItem('remove-me');
    expect(useCartStore.getState().items['remove-me']).toBeUndefined();
  });

  it('decrements instead of deleting when quantity > 1', () => {
    useCartStore.getState().addItem({ productId: 'multi', name: 'x', price: 10, quantity: 3 });
    useCartStore.getState().removeItem('multi');
    expect(useCartStore.getState().items['multi']?.quantity).toBe(2);
  });
});
