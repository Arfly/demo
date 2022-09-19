/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Text, View, Image, Dimensions, StyleSheet} from 'react-native';

const plateImg = require('./assets/plate.png');

const suggestImg = require('./assets/suggest.png');
const burgerImg = require('./assets/burger.png');
const cupImg = require('./assets/cup.png');
const eatImg = require('./assets/eat.png');

const styles = StyleSheet.create({
  header: {
    height: 73,
    backgroundColor: '#FD003C',
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
  },
  body: {
    position: 'absolute',
    top: 0,
    flex: 1,
  },
  container: {
    backgroundColor: '#1E1E1E',
    flex: 1,
    marginTop: 47,
    marginBottom: 34,
  },
  footer: {
    height: 65,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  line: {
    width: '100%',
    height: 3,
    backgroundColor: '#F2F1F1',
    position: 'absolute',
    top: '50%',
  },
  plateContainer: {
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: Dimensions.get('window').height / 2,
  },
  plateStyle: {
    width: 256.63,
    height: 97.11,
    textAlign: 'center',
  },
  payText: {
    width: 143,
    textAlign: 'center',
    fontFamily: 'PingFang SC',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 65,
    color: '#FFFFFF',
  },
  payButton: {
    width: 143,
    height: 65,
    position: 'absolute',
    right: 0,
    textAlign: 'center',
  },
  menuIcon: {
    width: 30,
  },
  menu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coast: {
    fontFamily: 'PingFang SC',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 32,
    color: '#4F4F4F',
    position: 'absolute',
    left: 22,
    lineHeight: 65,
  },
  unit: {
    fontSize: 22,
  },
  mapContainer: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    top: Dimensions.get('window').height / 2 + 170,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 22,
    paddingRight: 30,
  },
  mapText: {
    fontFamily: 'PingFang SC',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 16,
    color: '#606060',
    width: Dimensions.get('window').width - 22 - 30 - 18 * 2 - 32 - 25,
  },
});

const App = () => {
  return (
    <LinearGradient
      colors={['#F5F5F5', '#FFEDED']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={[styles.container]}>
      <LinearGradient colors={['#FD003C', '#FF5D79']} style={styles.header}>
        <View style={styles.menu}>
          <Image source={suggestImg} style={styles.menuIcon} />
        </View>
        <View style={styles.menu}>
          <Image source={burgerImg} style={styles.menuIcon} />
        </View>
        <View style={styles.menu}>
          <Image source={cupImg} style={[styles.menuIcon, {width: 25}]} />
        </View>
        <View style={styles.menu}>
          <Image source={eatImg} style={styles.menuIcon} />
        </View>
      </LinearGradient>
      <View />
      <View style={styles.line} />
      <View style={styles.body}>
        <View style={styles.plateContainer}>
          <Image source={plateImg} style={styles.plate} />
          {/* <Image source={require('./assets/coffee.png')} /> */}
          {/* <Image source={require('./assets/hanbao.png')} /> */}
          {/* <Image source={require('./assets/shutiao.png')} /> */}
        </View>
        <View style={styles.mapContainer}>
          <Image
            style={{marginRight: 18, width: 25}}
            source={require('./assets/map.png')}
          />
          <Text style={styles.mapText}>
            Dongcheng District Metro Cultural Building
          </Text>
          <Image
            style={{marginLeft: 18, width: 32}}
            source={require('./assets/phone.png')}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.coast}>
            0<Text style={styles.unit}>$</Text>
          </Text>
        </View>
        <LinearGradient
          colors={['#FD003C', '#FF5D79']}
          style={styles.payButton}>
          <Text style={styles.payText}>Pay</Text>
        </LinearGradient>
      </View>
    </LinearGradient>
  );
};

export default App;
