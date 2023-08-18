import React, { useRef, useState } from 'react';
import { TouchableHighlight } from 'react-native';

import VisibilitySensor from '@svanboxel/visibility-sensor-react-native';
import { AVPlaybackStatus, Video } from 'expo-av';

import styles from './styles';

import { Post } from '@/API';
import VideoDescription from '@/components/molecules/VideoDescription';
import VideoInteraction from '@/components/molecules/VideoInteraction';
import VideoPlayer from '@/components/molecules/VideoPlayer';

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
    }
  };
  const handlePlaying = (isVisible: boolean) => {
    isVisible ? videoRef.current!.playAsync() : videoRef.current!.pauseAsync();
  };
  return (
    <>
      <VisibilitySensor onChange={handlePlaying}>
        <TouchableHighlight onPress={onPlayPress} style={styles.container}>
          <VideoPlayer
            videoUrl={item.videoUri}
            videoRef={videoRef}
            videoStatus={videoStatus}
          />
        </TouchableHighlight>
      </VisibilitySensor>
      <VideoInteraction item={item} />
      <VideoDescription item={item} />
    </>
  );
};

export default PostComponent;
