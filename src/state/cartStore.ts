import { create } from 'zustand';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** A single line item in the cart keyed by productId. */
export interface CartItem {
  productId: string;
  quantity: number;
  name: string;
  price: number;
}

interface CartState {
  /** Map of productId → CartItem for O(1) lookups. */
  items: Record<string, CartItem>;
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
}

// ---------------------------------------------------------------------------
// Store
// ---------------------------------------------------------------------------

/** Zustand cart store — always subscribe via slice selectors, never the whole store. */
export const useCartStore = create<CartState>((set) => ({
  items: {},

  addItem: ({ productId, name, price, quantity = 1 }) =>
    set((state) => {
      const existing = state.items[productId];
      return {
        items: {
          ...state.items,
          [productId]: {
            productId,
            name,
            price,
            quantity: existing !== undefined ? existing.quantity + quantity : quantity,
          },
        },
      };
    }),

  removeItem: (productId) =>
    set((state) => {
      const next = { ...state.items };
      const existing = next[productId];
      if (existing === undefined) return state;
      if (existing.quantity > 1) {
        next[productId] = { ...existing, quantity: existing.quantity - 1 };
      } else {
        delete next[productId];
      }
      return { items: next };
    }),

  clearCart: () => set({ items: {} }),
}));

// ---------------------------------------------------------------------------
// Slice selectors — subscribe to only what you need
// ---------------------------------------------------------------------------

/** Returns the current quantity of a single product in the cart. */
export const useCartItemQty = (productId: string): number =>
  useCartStore((s) => s.items[productId]?.quantity ?? 0);

/** Returns the total number of items across all products. */
export const useCartTotalCount = (): number =>
  useCartStore((s) =>
    Object.values(s.items).reduce((sum, item) => sum + item.quantity, 0),
  );

/** Returns all cart items as an array (for a cart drawer/sheet). */
export const useCartItems = (): CartItem[] =>
  useCartStore((s) => Object.values(s.items));
