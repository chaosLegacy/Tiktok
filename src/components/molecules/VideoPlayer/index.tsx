import React from 'react';

import { AVPlaybackStatus, ResizeMode, Video } from 'expo-av';

import styles from './styles';

import { View } from '@/components/templates/Themed';

type VideoPlayerProps = {
  videoUrl: string;
  videoRef: React.RefObject<Video>;
  videoStatus: [
    AVPlaybackStatus | undefined,
    React.Dispatch<React.SetStateAction<AVPlaybackStatus | undefined>>,
  ];
  isLooping?: boolean;
  shouldPlay?: boolean;
};
const VideoPlayer = ({
  videoUrl,
  videoRef,
  videoStatus,
  isLooping = true,
  shouldPlay = false,
}: VideoPlayerProps) => {
  const [, setStatus] = videoStatus;
  return (
    <>
      {videoUrl ? (
        <Video
          ref={videoRef}
          style={styles.video}
          source={{
            uri: videoUrl,
          }}
          // posterSource={{
          //   uri: posterUrl,
          // }}
          // posterStyle={{
          //   resizeMode: ResizeMode.COVER,
          // }}
          // usePoster={
          //   !status?.isLoaded || !status.isPlaying || status.didJustFinish
          // }
          isLooping={isLooping}
          useNativeControls={false}
          shouldPlay={shouldPlay}
          resizeMode={ResizeMode.COVER}
          onPlaybackStatusUpdate={(status) => setStatus(status)}
        />
      ) : (
        <View />
      )}
    </>
  );
};

export default VideoPlayer;
