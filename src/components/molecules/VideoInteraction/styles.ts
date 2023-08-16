import { StyleSheet } from 'react-native';

import Colors from '@/constants/Colors';

const styles = StyleSheet.create({
  transparent: {
    backgroundColor: 'transparent',
  },
  container: {
    position: 'absolute',
    right: 0,
    bottom: 80,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  buttonText: {
    marginVertical: 5,
  },
  profilePicture: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.dark.primary.border,
    marginBottom: 15,
  },
});

export default styles;
