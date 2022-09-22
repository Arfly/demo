import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  footer: {
    height: 65,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  payButton: {
    width: 143,
    height: 65,
    position: 'absolute',
    right: 0,
    textAlign: 'center',
  },
  unit: {
    fontSize: 22,
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
});

export function Footer(props: {total: number}) {
  return (
    <View style={styles.footer}>
      <View>
        <Text style={styles.coast}>
          {props.total}
          <Text style={styles.unit}> $</Text>
        </Text>
      </View>
      <LinearGradient colors={['#FD003C', '#FF5D79']} style={styles.payButton}>
        <Text style={styles.payText}>Pay</Text>
      </LinearGradient>
    </View>
  );
}
