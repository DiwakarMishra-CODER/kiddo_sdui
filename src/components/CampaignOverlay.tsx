import React, { useEffect, useRef, useMemo } from 'react';
import { StyleSheet, Animated, Dimensions } from 'react-native';
import type { OverlayConfig } from '@/types/sdui';

interface CampaignOverlayProps {
  overlay: OverlayConfig;
}

const { width, height } = Dimensions.get('window');
const PARTICLE_COUNT = 30;

type OverlayStyle = 'confetti' | 'school' | 'bubbles';

function getOverlayStyle(url: string): OverlayStyle {
  if (url.includes('paper-planes')) return 'school';
  if (url.includes('water-splash')) return 'bubbles';
  return 'confetti';
}

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

// ---------------------------------------------------------------------------
// All visual variation lives in the Particle data — one renderer handles all.
// ---------------------------------------------------------------------------

interface Particle {
  x: number;
  color: string;
  w: number;           // visual width
  h: number;           // visual height
  borderRadius: number;
  delay: number;
  duration: number;
  spinDeg: number;     // total rotation degrees (0 = no spin)
}

const CONFETTI_COLORS = ['#E53935', '#FDD835', '#43A047', '#8E24AA', '#FB8C00', '#FFD600'];
const SCHOOL_COLORS   = ['#1565C0', '#1976D2', '#0D47A1', '#FFD600', '#FFC107'];
const BUBBLE_COLORS   = ['#00BCD4', '#00ACC1', '#81D4FA', '#4FC3F7', '#00E5FF', '#B2EBF2'];

function makeParticles(style: OverlayStyle): Particle[] {
  return Array.from({ length: PARTICLE_COUNT }, (_, i) => {
    switch (style) {
      case 'school': {
        const size = randomBetween(8, 16);
        // alternate between square and short rectangle
        const isRect = i % 2 === 0;
        return {
          x:            randomBetween(0, width - size * 2),
          color:        SCHOOL_COLORS[Math.floor(Math.random() * SCHOOL_COLORS.length)] ?? '#1565C0',
          w:            isRect ? size * 2 : size,
          h:            size,
          borderRadius: 2,
          delay:        randomBetween(0, 1400),
          duration:     randomBetween(1800, 3200),
          spinDeg:      360,
        };
      }
      case 'bubbles': {
        const size = randomBetween(10, 28);
        return {
          x:            randomBetween(0, width - size),
          color:        BUBBLE_COLORS[Math.floor(Math.random() * BUBBLE_COLORS.length)] ?? '#00BCD4',
          w:            size,
          h:            size,
          borderRadius: size / 2,
          delay:        randomBetween(0, 1400),
          duration:     randomBetween(2000, 3600),
          spinDeg:      0,
        };
      }
      default: { // confetti / carnival
        const size = randomBetween(8, 18);
        return {
          x:            randomBetween(0, width - size),
          color:        CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)] ?? '#E53935',
          w:            size,
          h:            size,
          borderRadius: size / 4,
          delay:        randomBetween(0, 1200),
          duration:     randomBetween(1800, 3200),
          spinDeg:      720,
        };
      }
    }
  });
}

// ---------------------------------------------------------------------------
// Main overlay — plays once, then fades container to 0
// ---------------------------------------------------------------------------

/**
 * Full-screen animated overlay for active campaigns.
 * All particles fall top → bottom; style varies by animationUrl:
 *   "paper-planes" → blue/yellow squares + rectangles  (Back to School)
 *   "water-splash" → cyan/light-blue circles           (Summer Playhouse)
 *   anything else  → multicolor confetti squares       (Mystery Gift Carnival)
 * Plays once. Container fades out after the last particle finishes.
 * pointerEvents="none" throughout so taps always pass through.
 */
export function CampaignOverlay({ overlay }: CampaignOverlayProps) {
  const containerOpacity = useRef(new Animated.Value(0)).current;

  const overlayStyle = useMemo(
    () => getOverlayStyle(overlay.animationUrl),
    [overlay.animationUrl],
  );

  const particles = useMemo(
    () => makeParticles(overlayStyle),
    [overlayStyle],
  );

  // ms until the slowest particle finishes falling
  const maxLifetime = useMemo(
    () => Math.max(...particles.map(p => p.delay + p.duration)),
    [particles],
  );

  useEffect(() => {
    // Fade container in
    Animated.timing(containerOpacity, {
      toValue:  1,
      duration: 400,
      useNativeDriver: true,
    }).start();

    // Fade container out after every particle has finished
    const timer = setTimeout(() => {
      Animated.timing(containerOpacity, {
        toValue:  0,
        duration: 600,
        useNativeDriver: true,
      }).start();
    }, maxLifetime + 300); // 300 ms grace after last particle

    return () => clearTimeout(timer);
  }, [containerOpacity, maxLifetime]);

  return (
    <Animated.View
      style={[styles.container, { opacity: containerOpacity }]}
      pointerEvents="none"
    >
      {particles.map((p, i) => (
        <ParticleView key={i} particle={p} />
      ))}
    </Animated.View>
  );
}

// ---------------------------------------------------------------------------
// Single particle — falls once from top to bottom, no loop
// ---------------------------------------------------------------------------

interface ParticleViewProps {
  particle: Particle;
}

function ParticleView({ particle }: ParticleViewProps) {
  const translateY = useRef(new Animated.Value(-particle.h * 2)).current;
  const opacity    = useRef(new Animated.Value(0)).current;
  const rotate     = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const spinAnim = particle.spinDeg > 0
      ? [Animated.timing(rotate, {
          toValue:  1,
          duration: particle.duration,
          useNativeDriver: true,
        })]
      : [];

    Animated.sequence([
      Animated.delay(particle.delay),
      Animated.parallel([
        Animated.timing(translateY, {
          toValue:  height + 40,
          duration: particle.duration,
          useNativeDriver: true,
        }),
        Animated.sequence([
          Animated.timing(opacity, { toValue: 1, duration: 200, useNativeDriver: true }),
          Animated.timing(opacity, {
            toValue:  0,
            duration: 400,
            delay:    particle.duration - 600,
            useNativeDriver: true,
          }),
        ]),
        ...spinAnim,
      ]),
    ]).start(); // no completion callback → plays once only
  }, [opacity, particle, rotate, translateY]);

  const spin = rotate.interpolate({
    inputRange:  [0, 1],
    outputRange: ['0deg', `${particle.spinDeg}deg`],
  });

  return (
    <Animated.View
      style={[
        styles.particle,
        {
          left:            particle.x,
          width:           particle.w,
          height:          particle.h,
          borderRadius:    particle.borderRadius,
          backgroundColor: particle.color,
          opacity,
          transform: particle.spinDeg > 0
            ? [{ translateY }, { rotate: spin }]
            : [{ translateY }],
        },
      ]}
    />
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top:      0,
    left:     0,
    width,
    height,
    zIndex:   100,
  },
  particle: {
    position: 'absolute',
    top:      0,
  },
});
