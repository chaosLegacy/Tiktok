import React from 'react';

import { FlashList } from '@shopify/flash-list';
import posts from 'assets/data/posts';

import { View } from '../Themed';

import styles from './styles';

import Post from '@/components/organisms/Post';
import layout from '@/constants/Layout';

const HomeTemplate = () => {
  return (
    <View style={styles.container}>
      <FlashList
        data={posts.items}
        renderItem={({ item }) => <Post item={item} />}
        estimatedItemSize={10}
        showsVerticalScrollIndicator={false}
        snapToInterval={layout.window.height - 24}
        snapToAlignment="start"
        decelerationRate="fast"
      />
    </View>
  );
};

export default HomeTemplate;
