import React, {useEffect} from 'react';
import {StyleSheet, View, Text, ImageBackground, Image} from 'react-native';
import {background, logo} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000);
  }, [navigation]);

  return (
    <ImageBackground source={background} style={styles.background}>
      <Image source={logo} style={styles.logo} />
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 212,
    height: 95,
  },
});
