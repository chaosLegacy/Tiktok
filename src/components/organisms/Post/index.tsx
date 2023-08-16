import React, { useRef, useState } from 'react';
import { TouchableHighlight } from 'react-native';

import { AVPlaybackStatus, Video } from 'expo-av';

import styles from './styles';

import VideoDescription from '@/components/molecules/VideoDescription';
import VideoInteraction from '@/components/molecules/VideoInteraction';
import VideoPlayer from '@/components/molecules/VideoPlayer';
import { Post } from '@/types';

type PostProps = {
  item: Post;
};
const PostComponent = ({ item }: PostProps) => {
  const videoRef = useRef<Video>(null);
  const videoStatus = useState<AVPlaybackStatus>();
  const currentVideoStatus = videoStatus[0];
  const onPlayPress = () => {
    if (currentVideoStatus?.isLoaded) {
      currentVideoStatus.isPlaying
        ? videoRef.current!.pauseAsync()
        : videoRef.current!.playAsync();
      if (
        currentVideoStatus.durationMillis === currentVideoStatus.positionMillis
      ) {
        console.log('videos finished: should replay');
        // videoRef.current!.replayAsync();
        videoRef.current!.stopAsync();
        videoRef.current!.playAsync();
      }
    }
  };
  return (
    <>
      <TouchableHighlight onPress={onPlayPress} style={styles.container}>
        <VideoPlayer
          videoUrl={item.videoUrl}
          videoRef={videoRef}
          videoStatus={videoStatus}
        />
      </TouchableHighlight>
      <VideoInteraction item={item} />
      <VideoDescription item={item} />
    </>
  );
};

export default PostComponent;
