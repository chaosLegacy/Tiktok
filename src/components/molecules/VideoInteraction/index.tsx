import React, { useState } from 'react';
import { Image, TouchableOpacity, useColorScheme, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import millify from 'millify';

import styles from './styles';

import Container from '@/components/atoms/Container';
import { Text } from '@/components/atoms/Text';
import Colors from '@/constants/Colors';
import { Post } from '@/types';

type VideoInteractionProps = {
  item: Post;
};

const VideoInteraction = ({ item }: VideoInteractionProps) => {
  const theme = useColorScheme() ?? 'light';
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [post, setPost] = useState<Post>(item);
  const onPressLike = () => {
    isLiked ? -1 : 1;
    setPost({
      ...item,
      likesCount: item.likesCount + 1,
    });
    setIsLiked(!isLiked);
  };
  return (
    <Container style={[styles.container, styles.transparent]}>
      <View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Image
            source={{
              uri: post.user.avatar,
            }}
            style={styles.profilePicture}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={onPressLike}>
          <FontAwesome
            name="heart"
            size={30}
            color={isLiked ? 'red' : Colors[theme].primary.text}
          />
          <Text color="secondary" fontSize="sm" style={styles.buttonText}>
            {millify(post.likesCount)}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <FontAwesome
            name="comment"
            size={30}
            color={Colors[theme].primary.text}
          />
          <Text color="secondary" fontSize="sm" style={styles.buttonText}>
            {millify(post.commentCount)}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <FontAwesome
            name="share"
            size={30}
            color={Colors[theme].primary.text}
          />
          <Text color="secondary" fontSize="sm" style={styles.buttonText}>
            {millify(post.sharesCount)}
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default VideoInteraction;
