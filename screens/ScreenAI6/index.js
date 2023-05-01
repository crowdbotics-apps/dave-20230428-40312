import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = () => {
  useEffect(() => {// Add any necessary logic here
  }, []);
  return <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 200,
    height: 200
  }
});
export default SplashScreen;