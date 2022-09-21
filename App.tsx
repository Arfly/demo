import React, {useRef, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {SceneMap, TabView} from 'react-native-tab-view';

const IMG = {
  plate: require('./assets/plate.png'),
  suggest: require('./assets/suggest.png'),
  burger: require('./assets/burger.png'),
  cup: require('./assets/cup.png'),
  eat: require('./assets/eat.png'),
};

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
    right: 40,
    top: 100,
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
    right: 48,
    top: 142,
  },
  addButton: {
    position: 'absolute',
    width: 99,
    height: 99,
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
  food: {
    position: 'absolute',
    left: 260,
    top: 270,
    display: 'none',
  },
});

function Fries() {
  const friesStyles = StyleSheet.create({
    container: {
      position: 'relative',
    },
    upper1: {
      position: 'absolute',
      top: -50,
      left: 40,
    },
    upper2: {
      position: 'absolute',
      top: 0,
      left: -10,
    },
    main: {
      position: 'absolute',
      top: 25,
      left: 0,
      width: 200,
      height: 200,
    },
    star1: {
      position: 'absolute',
      top: 25,
      left: 160,
      transform: [{scale: 0.7}],
    },
    star2: {
      position: 'absolute',
      top: 90,
      left: 180,
      transform: [{scale: 0.3}],
    },
    star3: {
      position: 'absolute',
      top: 90,
      left: 0,
      transform: [{scale: 0.3}],
    },
  });
  return (
    <View style={[friesStyles.container, styles.scrollViewContainer]}>
      <Image style={friesStyles.star1} source={require('./assets/star1.png')} />
      <Image style={friesStyles.star2} source={require('./assets/star1.png')} />
      <Image style={friesStyles.star3} source={require('./assets/star1.png')} />
      <Image source={require('./assets/st.png')} style={friesStyles.main} />
      <Image source={require('./assets/st1.png')} style={friesStyles.upper1} />
      <Image source={require('./assets/st2.png')} style={friesStyles.upper2} />
      <Text style={styles.foodName}>FRIES</Text>
      <Text style={styles.price}>4 $</Text>
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
      top: -40,
      left: 5,
    },
    main: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: 243,
      height: 258,
    },
    star1: {
      position: 'absolute',
      top: 60,
      left: 160,
      transform: [{scale: 0.3}],
    },
    star2: {
      position: 'absolute',
      top: 170,
      left: 140,
      transform: [{scale: 0.8}],
    },
    star3: {
      position: 'absolute',
      top: 180,
      left: 20,
      transform: [{scale: 0.5}],
    },
  });
  return (
    <View style={[coffeeStyles.container, styles.scrollViewContainer]}>
      <Image
        style={coffeeStyles.star1}
        source={require('./assets/star1.png')}
      />
      <Image
        style={coffeeStyles.star2}
        source={require('./assets/star1.png')}
      />
      <Image
        style={coffeeStyles.star3}
        source={require('./assets/star1.png')}
      />
      <Image source={require('./assets/cf2.png')} style={coffeeStyles.main} />
      <Image source={require('./assets/cf1.png')} style={coffeeStyles.upper} />
      <Text style={styles.foodName}>LATTE</Text>
      <Text style={styles.price}>3 $</Text>
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
      left: 30,
    },
    main: {
      position: 'absolute',
      top: 60,
      left: 30,
      width: 200,
      height: 200,
    },
    star1: {
      position: 'absolute',
      top: 10,
      left: 25,
      transform: [{scale: 0.3}],
    },
    star2: {
      position: 'absolute',
      top: 230,
      left: 180,
      transform: [{scale: 0.3}],
    },
    star3: {
      position: 'absolute',
      top: 190,
      left: 25,
      transform: [{scale: 0.5}],
    },
  });
  return (
    <View style={[burgerStyles.container, styles.scrollViewContainer]}>
      <Image
        style={burgerStyles.star1}
        source={require('./assets/star1.png')}
      />
      <Image
        style={burgerStyles.star2}
        source={require('./assets/star1.png')}
      />
      <Image
        style={burgerStyles.star3}
        source={require('./assets/star1.png')}
      />
      <Image source={require('./assets/hb2.png')} style={burgerStyles.main} />
      <Image source={require('./assets/hb1.png')} style={burgerStyles.upper} />
      <Text style={styles.foodName}>BURGER</Text>
      <Text style={styles.price}>6 $</Text>
    </View>
  );
}

const foods = [
  {
    img: require('./assets/shutiao.png'),
    price: 4,
  },
  {
    img: require('./assets/coffee.png'),
    price: 3,
  },
  {
    img: require('./assets/hanbao.png'),
    price: 6,
  },
];

const App = () => {
  const [index, setIndex] = useState(0);
  const [total, setTotal] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Fire'},
    {key: 'second', title: 'Coffee'},
    {key: 'third', title: 'Burger'},
  ]);

  const initialLayout = {width: Dimensions.get('window').width};

  const renderScene = SceneMap({
    first: Fries,
    second: Coffee,
    third: Burger,
  });

  const pos1 = useRef(new Animated.ValueXY()).current;
  const pos2 = useRef(new Animated.ValueXY()).current;
  const pos3 = useRef(new Animated.ValueXY()).current;

  const [vis1, setVis1] = useState('none');
  const [vis2, setVis2] = useState('none');
  const [vis3, setVis3] = useState('none');

  const setVis = [setVis1, setVis2, setVis3];
  const pos = [pos1, pos2, pos3];

  const [addedNum, setNum] = useState(0);
  const [prev, setPrev] = useState<Animated.ValueXY>();

  function onAddPress() {
    setTotal(total + foods[index].price);
    if (addedNum < 3) {
      setVis[index]('flex');
      const target = {x: -110, y: 120};

      if (prev) {
        const _target = {...target};
        if (addedNum === 1) {
          _target.y -= 30;
        }

        if (addedNum === 2) {
          _target.x -= 60;
          _target.y += 10;
        }

        Animated.spring(prev, {
          toValue: _target,
          useNativeDriver: true,
        }).start();
      }

      if (addedNum === 1) {
        target.x -= 50;
        target.y += 10;
      }

      if (addedNum === 2) {
        target.x += 30;
        target.y += 20;
      }

      Animated.spring(pos[index], {
        toValue: target,
        useNativeDriver: true,
      }).start();
      setPrev(pos[index]);
      setNum(addedNum + 1);
    }
  }

  return (
    <LinearGradient
      colors={['#F5F5F5', '#FFEDED']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={[styles.container]}>
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

      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={() => <View />}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={styles.tabView}
      />

      <View style={styles.line} />

      <View style={styles.body}>
        <View style={styles.plateContainer}>
          <Image source={IMG.plate} />
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

      <Animated.Image
        style={[
          styles.food,
          {
            transform: [{translateX: pos1.x}, {translateY: pos1.y}],
          },
          {
            display: vis1,
          },
        ]}
        source={require('./assets/shutiao.png')}
      />

      <Animated.Image
        style={[
          styles.food,
          {
            transform: [{translateX: pos2.x}, {translateY: pos2.y}],
          },
          {
            display: vis2,
          },
        ]}
        source={require('./assets/coffee.png')}
      />

      <Animated.Image
        style={[
          styles.food,
          {
            transform: [{translateX: pos3.x}, {translateY: pos3.y}],
          },
          {
            display: vis3,
          },
        ]}
        source={require('./assets/hanbao.png')}
      />

      <View style={styles.footer}>
        <View>
          <Text style={styles.coast}>
            {total}
            <Text style={styles.unit}> $</Text>
          </Text>
        </View>
        <LinearGradient
          colors={['#FD003C', '#FF5D79']}
          style={styles.payButton}>
          <Text style={styles.payText}>Pay</Text>
        </LinearGradient>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={() => onAddPress()}>
        <Image source={require('./assets/add.png')} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default App;
