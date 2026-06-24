/** Runtime theme injected by the SDUI payload — all visual customisation lives here. */
export interface Theme {
  /** Main brand color for CTAs, accents, highlights. */
  primary: string;
  /** Secondary accent (badges, tags, borders). */
  secondary: string;
  /** Screen and card background color. */
  background: string;
  /** Surface color for elevated cards. */
  surface: string;
  /** Primary text color. */
  textPrimary: string;
  /** Secondary / muted text. */
  textSecondary: string;
  /** CTA button text color. */
  ctaText: string;
  /** Separator / divider color. */
  divider: string;
  /** Badge background. */
  badge: string;
  /** Badge text. */
  badgeText: string;
}

/** Default fallback theme used when no payload theme is provided. */
export const defaultTheme: Theme = {
  primary: '#FF6B35',
  secondary: '#FFC107',
  background: '#F8F9FA',
  surface: '#FFFFFF',
  textPrimary: '#212529',
  textSecondary: '#6C757D',
  ctaText: '#FFFFFF',
  divider: '#E9ECEF',
  badge: '#FF6B35',
  badgeText: '#FFFFFF',
};
