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
import {Text, View, Image} from 'react-native';

const plateImg = require('./assets/plate.png');

const App = () => {
  const containerStyle = {
    backgroundColor: '#1E1E1E',
    flex: 1,
    marginTop: 47,
    marginBottom: 34,
  };

  const headerStyle = {
    height: 73,
    backgroundColor: '#FD003C',
    position: 'absolute',
    width: '100%',
  };

  const bodyStyle = {
    position: 'absolute',
    top: 120,
    flex: 1,
  };

  const footerStyle = {
    height: 65,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  };

  const plateStyle = {
    position: 'absolute',
    boxSizing: 'border-box',
    width: 256.63,
    height: 97.11,
    left: 59,
    top: 478,

    // background: linear-gradient(179.1deg, #FF2F57 -35.41%, #FF5977 99.32%);
    // border: 2px solid #FF5F7D;
    // box-shadow: 0px 3px 2px rgba(189, 68, 68, 0.447124), inset 0px 3px 15px rgba(179, 0, 0, 0.593835);
    // border-radius: 13px;
  };

  const paybuttonStyle = {
    width: 143,
    height: 65,
    position: 'absolute',
    right: 0,
  };

  const paytextStyle = {
    position: 'absolute',
    width: (143 - 57) / 2,
    height: (65 - 27) / 2,
    left: 10,
    top: 30,

    fontFamily: 'PingFang SC',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 32 * 1.02,
    /* or 50% */

    color: '#FFFFFF',
  };

  return (
    <LinearGradient
      colors={['#F5F5F5', '#FFEDED']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      style={containerStyle}>
      <LinearGradient colors={['#FD003C', '#FF5D79']} style={headerStyle}>
        <Text>Header</Text>
      </LinearGradient>
      <View style={bodyStyle}>
        <Image source={plateImg} style={plateStyle} />
      </View>
      <View style={footerStyle}>
        <LinearGradient colors={['#FD003C', '#FF5D79']} style={paybuttonStyle}>
          <Text style={paytextStyle}>Pay</Text>
        </LinearGradient>
      </View>
    </LinearGradient>
  );
};

export default App;
