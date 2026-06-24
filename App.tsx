import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CampaignProvider, useCampaign } from '@/state/campaignStore';
import { ThemeProvider } from '@/theme/ThemeProvider';
import { HomeScreen } from '@/screens/HomeScreen';

/**
 * ThemeGate: sits inside CampaignProvider so it can read the active payload's
 * theme and re-mount ThemeProvider whenever the campaign changes.
 */
function ThemeGate() {
  const { payload } = useCampaign();
  return (
    <ThemeProvider theme={payload.theme}>
      <HomeScreen />
    </ThemeProvider>
  );
}

/** Root entry point — campaign + theme providers wrap the screen tree. */
export default function App() {
  return (
    <SafeAreaProvider>
      <CampaignProvider>
        <StatusBar style="auto" />
        <ThemeGate />
      </CampaignProvider>
    </SafeAreaProvider>
  );
}
