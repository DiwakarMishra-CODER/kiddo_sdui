import React, { createContext, useContext, useState, useCallback } from 'react';
import { campaigns } from '@/data/payloads';
import type { SduiPayload, CampaignMeta } from '@/types/sdui';

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface CampaignContextValue {
  activeCampaign: CampaignMeta;
  payload: SduiPayload;
  /** Cycle to the next campaign in the list (wraps around). */
  nextCampaign: () => void;
}

const CampaignContext = createContext<CampaignContextValue | null>(null);

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

/** Provides the active campaign payload and a switcher fn to the entire tree. */
export function CampaignProvider({ children }: { children: React.ReactNode }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCampaign = campaigns[activeIndex] ?? campaigns[0]!;

  const nextCampaign = useCallback(() => {
    setActiveIndex((i) => (i + 1) % campaigns.length);
  }, []);

  const value: CampaignContextValue = {
    activeCampaign,
    payload: activeCampaign.payload,
    nextCampaign,
  };

  return (
    <CampaignContext.Provider value={value}>{children}</CampaignContext.Provider>
  );
}

// ---------------------------------------------------------------------------
// Hook
// ---------------------------------------------------------------------------

/** Access the active campaign + switcher. Must be inside CampaignProvider. */
export function useCampaign(): CampaignContextValue {
  const ctx = useContext(CampaignContext);
  if (ctx === null) {
    throw new Error('useCampaign must be used inside CampaignProvider');
  }
  return ctx;
}
