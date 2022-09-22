import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  menuIcon: {
    width: 30,
  },
  menu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    height: 73,
    backgroundColor: '#FD003C',
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
  },
});

const IMG = {
  suggest: require('../assets/suggest.png'),
  burger: require('../assets/burger.png'),
  cup: require('../assets/cup.png'),
  eat: require('../assets/eat.png'),
};

export function Header() {
  return (
    <LinearGradient colors={['#FD003C', '#FF5D79']} style={styles.header}>
      <View style={styles.menu}>
        <Image source={IMG.suggest} style={styles.menuIcon} />
      </View>
      <View style={styles.menu}>
        <Image source={IMG.burger} style={styles.menuIcon} />
      </View>
      <View style={styles.menu}>
        <Image source={IMG.cup} style={[styles.menuIcon, {width: 25}]} />
      </View>
      <View style={styles.menu}>
        <Image source={IMG.eat} style={styles.menuIcon} />
      </View>
    </LinearGradient>
  );
}
