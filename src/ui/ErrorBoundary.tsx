import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText } from './AppText';
import { spacing } from '@/theme/tokens';
import { neutral } from '@/theme/tokens';

interface ErrorBoundaryState {
  hasError: boolean;
}

interface BlockErrorBoundaryProps {
  blockId: string;
  children: React.ReactNode;
}

/**
 * Per-block error boundary — catches render errors in a single block and
 * replaces it with an empty view so the rest of the feed stays intact.
 */
export class BlockErrorBoundary extends React.Component<
  BlockErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: BlockErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  override componentDidCatch(error: Error, info: React.ErrorInfo) {
    if (__DEV__) {
      console.warn(
        `[BlockErrorBoundary] Block "${this.props.blockId}" threw an error:`,
        error.message,
        info.componentStack,
      );
    }
  }

  override render() {
    if (this.state.hasError) {
      if (__DEV__) {
        return (
          <View style={styles.devPlaceholder}>
            <AppText variant="xs" color="muted">
              Block "{this.props.blockId}" failed to render.
            </AppText>
          </View>
        );
      }
      // Production: silent empty view — doesn't disrupt the feed layout.
      return <View />;
    }
    return this.props.children;
  }
}

const styles = StyleSheet.create({
  devPlaceholder: {
    marginHorizontal: spacing.md,
    marginVertical: spacing.xxs,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    backgroundColor: neutral.gray100,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: neutral.gray300,
    borderStyle: 'dashed',
  },
});
