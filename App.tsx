/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Text, View, Image, Dimensions, StyleSheet, Alert} from 'react-native';
import {SceneMap, TabView} from 'react-native-tab-view';

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
    width: 228,
  },
  foodName: {
    fontFamily: 'PingFang SC',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 36,
    color: '#EB5C77',
    right: 70,
    top: 80,
    position: 'absolute',
  },
  price: {
    fontFamily: 'PingFang SC',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: 24,
    lineHeight: 28,
    color: '#EB5C77',
    position: 'absolute',
    right: 70,
    top: 112,
  },
  addButton: {
    position: 'absolute',
    width: 59,
    height: 59,
    left: 268,
    top: 298,
  },
  scrollViewContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2 - 73,
  },
  tabView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2 - 73,
    marginTop: 73,
  },
});

function Fries() {
  const friesStyles = StyleSheet.create({
    container: {
      position: 'relative',
    },
    upper: {
      position: 'absolute',
      top: 0,
      left: 0,
    },
    main: {
      position: 'absolute',
      top: 0,
      left: 0,
    },
  });
  return (
    <View style={[friesStyles.container, styles.scrollViewContainer]}>
      <Image
        source={require('./assets/shutiao.png')}
        style={friesStyles.main}
      />
      <Image source={require('./assets/st1.png')} style={friesStyles.upper} />
      <Image source={require('./assets/st2.png')} style={friesStyles.upper} />
      <Text style={styles.foodName}>FRIES</Text>
      <Text style={styles.price}>4$</Text>
    </View>
  );
}

function Coffee() {
  const coffeeStyles = StyleSheet.create({
    container: {
      position: 'relative',
    },
    upper: {
      position: 'absolute',
      top: 0,
      left: 0,
    },
    main: {
      position: 'absolute',
      top: 0,
      left: 0,
    },
  });
  return (
    <View style={[coffeeStyles.container, styles.scrollViewContainer]}>
      <Image source={require('./assets/cf2.png')} style={coffeeStyles.main} />
      <Image source={require('./assets/cf1.png')} style={coffeeStyles.upper} />
      <Text style={styles.foodName}>LATTE</Text>
      <Text style={styles.price}>3$</Text>
    </View>
  );
}

function Burger() {
  const burgerStyles = StyleSheet.create({
    container: {
      position: 'relative',
    },
    upper: {
      position: 'absolute',
      top: 0,
      left: 0,
    },
    main: {
      position: 'absolute',
      top: 0,
      left: 0,
    },
  });
  return (
    <View style={[burgerStyles.container, styles.scrollViewContainer]}>
      <Image source={require('./assets/hb2.png')} style={burgerStyles.main} />
      <Image source={require('./assets/hb1.png')} style={burgerStyles.upper} />
      <Text style={styles.foodName}>BURGER</Text>
      <Text style={styles.price}>6$</Text>
    </View>
  );
}

const App = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
    {key: 'third', title: 'Third'},
  ]);

  const initialLayout = {width: Dimensions.get('window').width};

  const renderScene = SceneMap({
    first: Fries,
    second: Coffee,
    third: Burger,
  });

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
      {/* <View>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          style={[styles.scrollViewContainer, {backgroundColor: 'red'}]}
        />
      </View> */}

      <Image
        source={require('./assets/add.png')}
        style={styles.addButton}
        onPress={Alert.alert(index + '')}
      />

      <View style={styles.line} />
      <View style={styles.body}>
        <View style={styles.plateContainer}>
          <Image source={plateImg} />
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
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={() => <View />}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={styles.tabView}
      />
    </LinearGradient>
  );
};

export default App;
