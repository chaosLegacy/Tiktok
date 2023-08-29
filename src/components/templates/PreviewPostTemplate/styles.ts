import { StyleSheet } from 'react-native';

import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  floatingHeader: {
    position: 'absolute',
    zIndex: 9,
    width: '100%',
    top: Constants.statusBarHeight + 10,
    backgroundColor: 'transparent',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#0000008d',
    borderRadius: 50,
  },
});

export default styles;
