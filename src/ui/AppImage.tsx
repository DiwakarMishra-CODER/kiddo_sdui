import React, { useState } from 'react';
import { View, StyleSheet, type ViewStyle } from 'react-native';
import { Image } from 'expo-image';
import { useTheme } from '@/theme/ThemeProvider';
import { neutral, radius as radiusTokens } from '@/theme/tokens';

interface AppImageProps {
  uri: string;
  width: number | string;
  height: number | string;
  borderRadius?: number;
  style?: ViewStyle;
}

/** Cached image with skeleton placeholder and graceful error fallback. */
export function AppImage({
  uri,
  width,
  height,
  borderRadius = radiusTokens.md,
  style,
}: AppImageProps) {
  const theme = useTheme();
  const [hasError, setHasError] = useState(false);

  const containerStyle: ViewStyle = {
    width: width as number,
    height: height as number,
    borderRadius,
    overflow: 'hidden',
    backgroundColor: neutral.gray200,
    ...style,
  };

  if (hasError) {
    return (
      <View style={[containerStyle, styles.errorContainer, { backgroundColor: theme.divider }]} />
    );
  }

  return (
    <View style={containerStyle}>
      <Image
        source={{ uri }}
        style={StyleSheet.absoluteFill}
        contentFit="cover"
        transition={200}
        placeholder={{ blurhash: 'L6PZfSi_.AyE_3t7t7R**0o#DgR4' }}
        onError={() => setHasError(true)}
        cachePolicy="memory-disk"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
