/**
 * Asset cache resolver — maps known remote Lottie URL keys to bundled local files.
 * The code path mirrors production OTA resolution; bundled files prevent demo flakiness.
 */

type LottieSource = ReturnType<typeof require>;

/** Maps the canonical remote URL to its bundled local asset. */
const LOTTIE_URL_MAP: Record<string, LottieSource> = {
  'https://assets.kiddo.app/lottie/paper-planes.json': require('../../assets/lottie/paper-planes.json'),
  'https://assets.kiddo.app/lottie/water-splash.json': require('../../assets/lottie/water-splash.json'),
  'https://assets.kiddo.app/lottie/confetti.json': require('../../assets/lottie/confetti.json'),
};

/**
 * Resolves a Lottie asset URL to a local require() source if available,
 * otherwise returns the remote URL string for network fetch.
 */
export function resolveLottieAsset(url: string): LottieSource | string {
  return LOTTIE_URL_MAP[url] ?? url;
}
