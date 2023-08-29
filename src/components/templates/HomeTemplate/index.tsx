import React, { useEffect, useState } from 'react';

import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';

import { View } from '../Themed';

import styles from './styles';

import { Post } from '@/API';
import PostComponent from '@/components/organisms/Post';
import layout from '@/constants/Layout';
import { useGePosts } from '@/hooks/usePost';

const HomeTemplate = () => {
  const { data, fetchMore } = useGePosts();
  const [posts, setPosts] = useState<Array<Post | null>>();
  const [nextToken, setNextToken] = useState<string | null>();
  const isFocused = useIsFocused();

  useEffect(() => {
    setPosts(data?.listPosts?.items as Post[]);
    setNextToken(data?.listPosts?.nextToken);
  }, [data]);

  const loadMorePosts = async () => {
    setNextToken(data?.listPosts?.nextToken);
    const response = await fetchMore(nextToken);
    if (response) {
      setPosts({
        ...data?.listPosts?.items,
        ...response.data?.listPosts?.items,
      } as Post[]);
    }
  };
  if (!isFocused) return <View />;
  return (
    <View style={styles.container}>
      <FlashList
        data={posts}
        renderItem={({ item }) => <PostComponent item={item as Post} />}
        estimatedItemSize={10}
        showsVerticalScrollIndicator={false}
        snapToInterval={layout.window.height - layout.TAB_OFFSET}
        snapToAlignment="start"
        decelerationRate="fast"
        // onEndReached={loadMorePosts}
      />
    </View>
  );
};

export default HomeTemplate;
