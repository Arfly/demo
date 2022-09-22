import React, {useRef, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  View,
  Dimensions,
  Animated,
  TouchableOpacity,
  Easing,
} from 'react-native';
import {SceneMap, TabView} from 'react-native-tab-view';
import {styles} from './src/styles';
import {Footer} from './src/footer';
import {Header} from './src/header';
import {Burger, Coffee, Commodity, Fries} from './src/commodity';
import {Body} from './src/body';

const foodsPrice = [4, 3, 6];
const addImg = require('./assets/add.png');

const App = () => {
  const [total, setTotal] = useState(0);

  const [index, setIndex] = useState(0);
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
  const commodities = [
    <Commodity pos={pos1} key={1} img={require('./assets/shutiao.png')} />,
    <Commodity pos={pos2} key={2} img={require('./assets/coffee.png')} />,
    <Commodity pos={pos3} key={3} img={require('./assets/hanbao.png')} />,
  ];
  const [buyArr, setBuyArr] = useState<Element[]>([]);
  const pos = [pos1, pos2, pos3];

  const [prev, setPrev] = useState<number[]>([]);

  const targets = [
    {x: -110, y: 130},
    {x: -110, y: 100},
    {x: -160, y: 150},
    {x: -60, y: 150},
  ];

  function onAddPress() {
    setTotal(total + foodsPrice[index]);
    if (buyArr.length < 3 && prev.indexOf(index) === -1) {
      const buyNum = buyArr.length;
      buyArr.push(commodities[index]);
      setBuyArr([...buyArr]);

      if (prev.length > 0) {
        Animated.spring(pos[prev[prev.length - 1]], {
          toValue: targets[buyNum],
          useNativeDriver: true,
        }).start();
      }

      const target = targets[prev.length > 0 ? buyArr.length : buyNum];

      Animated.spring(pos[index], {
        toValue: target,
        useNativeDriver: true,
      }).start();
      prev.push(index);
      setPrev([...prev]);
    }
  }

  const addButtonOpacity = useRef(new Animated.Value(1)).current;
  function onSwipeStart() {
    Animated.timing(addButtonOpacity, {
      toValue: 0,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      // if (addButtonOpacity) {
      Animated.timing(addButtonOpacity, {
        toValue: 1,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start();
      // }
    }, 300);
  }

  return (
    <LinearGradient
      colors={['#F5F5F5', '#FFEDED']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={[styles.container]}>
      <Header />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={() => <View />}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={styles.tabView}
        onSwipeStart={onSwipeStart}
      />
      <View style={styles.line} />
      <Body />
      {buyArr.map(commodity => commodity)}
      <Footer total={total} />
      <TouchableOpacity style={[styles.addButton]} onPress={() => onAddPress()}>
        <Animated.Image
          style={{
            opacity: addButtonOpacity,
          }}
          source={addImg}
        />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default App;
