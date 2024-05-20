import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import { Home } from './src/screens/Home';
import { colors } from './src/constants/colors';

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'Inter-Regular': require('./src/assets/fonts/Inter-Regular.ttf'),
    'Inter-Bold': require('./src/assets/fonts/Inter-Bold.ttf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light' translucent />
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray600,
  },
});
