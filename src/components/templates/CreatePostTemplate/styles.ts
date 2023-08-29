import { StyleSheet } from 'react-native';

import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#0e101c',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  label: {
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#ec5990',
    borderRadius: 4,
  },

  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 4,
  },
});

export default styles;
