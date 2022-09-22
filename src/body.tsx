import React from 'react';
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  body: {
    position: 'absolute',
    top: 0,
    flex: 1,
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
  mapContainer: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    top: Dimensions.get('window').height / 2 + 170,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 22,
    paddingRight: 30,
  },
  mapIcon: {marginRight: 18, width: 25},
  phoneIcon: {marginLeft: 18, width: 32},
});

const IMG = {
  plate: require('../assets/plate.png'),
  phone: require('../assets/phone.png'),
  map: require('../assets/map.png'),
};

export function Body() {
  return (
    <View style={styles.body}>
      <View style={styles.plateContainer}>
        <Image source={IMG.plate} />
      </View>
      <View style={styles.mapContainer}>
        <Image style={styles.mapIcon} source={IMG.map} />
        <Text style={styles.mapText}>
          Dongcheng District Metro Cultural Building
        </Text>
        <Image style={styles.phoneIcon} source={IMG.phone} />
      </View>
    </View>
  );
}
