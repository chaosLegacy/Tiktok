import { StyleSheet } from 'react-native';

import Layout from '@/constants/Layout';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Layout.window.width,
    height: Layout.window.height - Layout.TAB_OFFSET,
  },
});

export default styles;
