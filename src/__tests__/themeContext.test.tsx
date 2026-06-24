/**
 * Test: ThemeContext returns the default theme when no provider is mounted,
 * and returns the injected theme when wrapped in ThemeProvider.
 */
import React from 'react';
import { renderHook } from '@testing-library/react-native';
import { ThemeProvider, useTheme } from '../theme/ThemeProvider';
import { defaultTheme } from '../types/theme';
import type { Theme } from '../types/theme';

describe('ThemeContext', () => {
  it('returns the default theme when no provider is mounted', () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current).toEqual(defaultTheme);
  });

  it('returns the injected theme when wrapped in ThemeProvider', () => {
    const customTheme: Theme = {
      ...defaultTheme,
      primary: '#1565C0',
      secondary: '#FFD600',
      background: '#E3F2FD',
    };

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
    );

    const { result } = renderHook(() => useTheme(), { wrapper });
    expect(result.current.primary).toBe('#1565C0');
    expect(result.current.secondary).toBe('#FFD600');
    expect(result.current.background).toBe('#E3F2FD');
    expect(result.current.surface).toBe(defaultTheme.surface);
  });
});
