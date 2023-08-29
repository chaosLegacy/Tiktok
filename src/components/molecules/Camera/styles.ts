import { StyleSheet } from 'react-native';

import Layout from '@/constants/Layout';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  animatedCircular: {
    backgroundColor: '#00000056',
    borderRadius: 50,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'flex-end',
    backgroundColor: 'transparent',
    borderRadius: 50,
    height: 55,
    width: 55,
  },
  buttonRecord: {
    width: 80,
    height: 80,
    backgroundColor: 'red',
  },
  buttonStopRecord: {
    borderRadius: 5,
    width: 30,
    height: 30,
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 24,
    right: Layout.window.width / 2.33,
  },
});

export default styles;
