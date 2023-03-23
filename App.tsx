import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { HomeScreen } from '@/screens/HomeScreens';

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
