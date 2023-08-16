import { StyleSheet } from 'react-native';

import Colors from '@/constants/Colors';

const styles = StyleSheet.create({
  transparent: {
    backgroundColor: 'transparent',
  },
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  postContent: {
    marginBottom: 5,
  },
  profilePicture: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: Colors.dark.primary.border,
  },
});

export default styles;
