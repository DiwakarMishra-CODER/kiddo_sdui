/**
 * Test: Dispatcher routes ADD_TO_CART to the Zustand cart store.
 */
import { handleAction } from '../dispatcher/handleAction';
import { useCartStore } from '../state/cartStore';

describe('handleAction dispatcher', () => {
  beforeEach(() => {
    // Reset cart state before each test
    useCartStore.setState({ items: {} });
  });

  it('routes ADD_TO_CART to the cart store', () => {
    handleAction({ type: 'ADD_TO_CART', payload: { productId: 'test-001', quantity: 2 } });

    const items = useCartStore.getState().items;
    expect(items['test-001']).toBeDefined();
    expect(items['test-001']?.quantity).toBe(2);
  });

  it('accumulates quantity on repeated ADD_TO_CART', () => {
    handleAction({ type: 'ADD_TO_CART', payload: { productId: 'test-002', quantity: 1 } });
    handleAction({ type: 'ADD_TO_CART', payload: { productId: 'test-002', quantity: 1 } });

    const items = useCartStore.getState().items;
    expect(items['test-002']?.quantity).toBe(2);
  });

  it('routes REMOVE_FROM_CART and decrements quantity', () => {
    useCartStore.setState({
      items: {
        'test-003': { productId: 'test-003', name: 'Item', price: 99, quantity: 3 },
      },
    });

    handleAction({ type: 'REMOVE_FROM_CART', payload: { productId: 'test-003' } });

    const items = useCartStore.getState().items;
    expect(items['test-003']?.quantity).toBe(2);
  });
});
