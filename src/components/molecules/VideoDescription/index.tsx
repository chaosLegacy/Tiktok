import React from 'react';
import {
  Animated,
  Easing,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import styles from './styles';

import { Post } from '@/API';
import Container from '@/components/atoms/Container';
import { Text } from '@/components/atoms/Text';
import { View } from '@/components/templates/Themed';
import Colors from '@/constants/Colors';

const spinValue = new Animated.Value(0);
Animated.loop(
  Animated.timing(spinValue, {
    toValue: 1,
    duration: 5000,
    easing: Easing.linear, // Easing is an additional import from react-native
    useNativeDriver: true, // To make use of native driver for performance
  }),
).start();

type VideoDescriptionProps = {
  item: Post;
};

const VideoDescription = ({ item: post }: VideoDescriptionProps) => {
  const theme = useColorScheme() ?? 'light';
  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Container style={[styles.container, styles.transparent]}>
      <View style={[styles.rowContainer, styles.transparent]}>
        <View style={styles.transparent}>
          <Text fontWeight="700" style={styles.postContent}>
            @chaosLegacy
          </Text>
          <Text style={styles.postContent} color="secondary">
            {post.description}
          </Text>
          {post.song && (
            <View style={[styles.textRowContainer, styles.transparent]}>
              <FontAwesome
                name="music"
                size={14}
                color={Colors[theme].primary.text}
                style={{ paddingRight: 10 }}
              />
              <Text fontSize="sm">{post.song.artist} - </Text>
              <Text fontSize="sm">{post.song.name}</Text>
            </View>
          )}
        </View>
        <TouchableOpacity>
          <Animated.Image
            source={{
              uri: post.song?.coverUri,
            }}
            style={[styles.profilePicture, { transform: [{ rotate: spin }] }]}
          />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default VideoDescription;
