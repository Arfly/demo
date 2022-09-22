import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    flex: 1,
    marginTop: 47,
    marginBottom: 34,
  },
  line: {
    width: '100%',
    height: 3,
    backgroundColor: '#F2F1F1',
    position: 'absolute',
    top: '50%',
  },
  addButton: {
    position: 'absolute',
    width: 99,
    height: 99,
    left: 268,
    top: 298,
  },
  tabView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 2 - 73,
    marginTop: 73,
  },
});
