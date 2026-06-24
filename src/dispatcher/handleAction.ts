import { Alert } from 'react-native';
import { useCartStore } from '@/state/cartStore';
import type { Action } from '@/types/sdui';

// ---------------------------------------------------------------------------
// Action handlers — each knows only about its own concern
// ---------------------------------------------------------------------------

function handleAddToCart(payload: Extract<Action, { type: 'ADD_TO_CART' }>['payload']) {
  useCartStore.getState().addItem({
    productId: payload.productId,
    name: '',
    price: 0,
    quantity: payload.quantity,
  });
}

function handleRemoveFromCart(
  payload: Extract<Action, { type: 'REMOVE_FROM_CART' }>['payload'],
) {
  useCartStore.getState().removeItem(payload.productId);
}

function handleDeepLink(payload: Extract<Action, { type: 'DEEP_LINK' }>['payload']) {
  if (__DEV__) {
    console.log('[Dispatcher] DEEP_LINK →', payload.url);
  }
  Alert.alert('Navigation', `Deep link: ${payload.url}`);
}

function handleOpenCategory(
  payload: Extract<Action, { type: 'OPEN_CATEGORY' }>['payload'],
) {
  if (__DEV__) {
    console.log('[Dispatcher] OPEN_CATEGORY →', payload.categoryId, payload.title);
  }
  Alert.alert('Category', `Opening: ${payload.title}`);
}

function handleApplyMysteryGiftCoupon(
  payload: Extract<Action, { type: 'APPLY_MYSTERY_GIFT_COUPON' }>['payload'],
) {
  if (__DEV__) {
    console.log('[Dispatcher] APPLY_MYSTERY_GIFT_COUPON →', payload.couponCode);
  }
  Alert.alert('Coupon Applied!', `Code "${payload.couponCode}" has been applied. 🎉`);
}

// ---------------------------------------------------------------------------
// Central dispatcher
// ---------------------------------------------------------------------------

/**
 * Single entry point for all interactive events in the SDUI feed.
 * Block components are completely decoupled from this routing logic —
 * they only emit an Action object via their onAction callback.
 */
export function handleAction(action: Action): void {
  switch (action.type) {
    case 'ADD_TO_CART':
      return handleAddToCart(action.payload);
    case 'REMOVE_FROM_CART':
      return handleRemoveFromCart(action.payload);
    case 'DEEP_LINK':
      return handleDeepLink(action.payload);
    case 'OPEN_CATEGORY':
      return handleOpenCategory(action.payload);
    case 'APPLY_MYSTERY_GIFT_COUPON':
      return handleApplyMysteryGiftCoupon(action.payload);
    default: {
      // Exhaustiveness check — TypeScript ensures all cases are handled.
      const _exhaustive: never = action;
      if (__DEV__) {
        console.warn('[Dispatcher] Unknown action type received:', _exhaustive);
      }
    }
  }
}
