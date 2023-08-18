import React, { useEffect, useState } from 'react';
import { Image, TouchableOpacity, useColorScheme, View } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import millify from 'millify';

import styles from './styles';

import { Post } from '@/API';
import Container from '@/components/atoms/Container';
import { Text } from '@/components/atoms/Text';
import Colors from '@/constants/Colors';
import {
  useCreateLike,
  useDeleteLike,
  useGetLikesByPostID,
} from '@/hooks/useLike';
import { useGetAuthenticatedUser } from '@/hooks/useUser';

type VideoInteractionProps = {
  item: Post;
};

const VideoInteraction = ({ item: post }: VideoInteractionProps) => {
  const theme = useColorScheme() ?? 'light';
  const { data: likes } = useGetLikesByPostID(post.id);
  const { data: authenticatedUser } = useGetAuthenticatedUser();
  const [likesCount, setLikesCount] = useState<number>(0);
  const [commentsCount, setCommentsCount] = useState<number>(0);
  const [sharesCount, setSharesCount] = useState<number>(0);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    if (likes?.likesByPostID?.items.length) {
      setIsLiked(
        likes.likesByPostID.items.findIndex(
          (item) => item?.userID === authenticatedUser?.attributes.sub,
        ) !== 1,
      );
      setLikesCount(likes.likesByPostID?.scannedCount || 0);
    }
  }, [likes]);

  const { _mutateCreateLike, data: like } = useCreateLike(post.userID, post.id);
  const { _mutateDeleteLike } = useDeleteLike();

  const onPressLike = () => {
    !isLiked ? _mutateCreateLike() : _mutateDeleteLike(like?.id);
    setIsLiked(!isLiked);
    setLikesCount(
      !isLiked ? likesCount + 1 : likesCount <= 0 ? 0 : likesCount - 1,
    );
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
            {millify(likesCount)}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <FontAwesome
            name="comment"
            size={30}
            color={Colors[theme].primary.text}
          />
          <Text color="secondary" fontSize="sm" style={styles.buttonText}>
            {millify(commentsCount)}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <FontAwesome
            name="share"
            size={30}
            color={Colors[theme].primary.text}
          />
          <Text color="secondary" fontSize="sm" style={styles.buttonText}>
            {millify(sharesCount)}
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default VideoInteraction;
