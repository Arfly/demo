import React from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  food: {
    position: 'absolute',
    left: 260,
    top: 270,
    width: 100,
    height: 100,
  },
  scrollViewContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2 - 73,
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
});

export function Commodity(props: {pos: Animated.ValueXY; img: any}) {
  return (
    <Animated.Image
      style={[
        styles.food,
        {
          transform: [{translateX: props.pos.x}, {translateY: props.pos.y}],
        },
      ]}
      source={props.img}
    />
  );
}

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

export function Fries() {
  return (
    <View style={[friesStyles.container, styles.scrollViewContainer]}>
      <Image
        style={friesStyles.star1}
        source={require('../assets/star1.png')}
      />
      <Image
        style={friesStyles.star2}
        source={require('../assets/star1.png')}
      />
      <Image
        style={friesStyles.star3}
        source={require('../assets/star1.png')}
      />
      <Image source={require('../assets/st.png')} style={friesStyles.main} />
      <Image source={require('../assets/st1.png')} style={friesStyles.upper1} />
      <Image source={require('../assets/st2.png')} style={friesStyles.upper2} />
      <Text style={styles.foodName}>FRIES</Text>
      <Text style={styles.price}>4 $</Text>
    </View>
  );
}

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

export function Coffee() {
  return (
    <View style={[coffeeStyles.container, styles.scrollViewContainer]}>
      <Image
        style={coffeeStyles.star1}
        source={require('../assets/star1.png')}
      />
      <Image
        style={coffeeStyles.star2}
        source={require('../assets/star1.png')}
      />
      <Image
        style={coffeeStyles.star3}
        source={require('../assets/star1.png')}
      />
      <Image source={require('../assets/cf2.png')} style={coffeeStyles.main} />
      <Image source={require('../assets/cf1.png')} style={coffeeStyles.upper} />
      <Text style={styles.foodName}>LATTE</Text>
      <Text style={styles.price}>3 $</Text>
    </View>
  );
}

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
export function Burger() {
  return (
    <View style={[burgerStyles.container, styles.scrollViewContainer]}>
      <Image
        style={burgerStyles.star1}
        source={require('../assets/star1.png')}
      />
      <Image
        style={burgerStyles.star2}
        source={require('../assets/star1.png')}
      />
      <Image
        style={burgerStyles.star3}
        source={require('../assets/star1.png')}
      />
      <Image source={require('../assets/hb2.png')} style={burgerStyles.main} />
      <Image source={require('../assets/hb1.png')} style={burgerStyles.upper} />
      <Text style={styles.foodName}>BURGER</Text>
      <Text style={styles.price}>6 $</Text>
    </View>
  );
}
