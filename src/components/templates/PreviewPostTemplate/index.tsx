import React, { useRef, useState } from 'react';
import { View as ViewNative } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { AVPlaybackStatus, Video } from 'expo-av';
import { Link, router } from 'expo-router';

import { View } from '../Themed';

import styles from './styles';

import { Button } from '@/components/atoms/Button';
import VideoPlayer from '@/components/molecules/VideoPlayer';
import Colors from '@/constants/Colors';

type PreviewPostTemplateProps = {
  postUri: string;
};

const PreviewPostTemplate = ({ postUri }: PreviewPostTemplateProps) => {
  const videoRef = useRef<Video>(null);
  const videoStatus = useState<AVPlaybackStatus>();
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const onCreatePost = () => {
    router.push({
      pathname: '/(tabs)/upload/createPost',
      params: { uri: postUri },
    });
  };
  const onPressBack = () => {
    router.back();
  };
  const onToggleVolume = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.setIsMutedAsync(!isMuted);
    }
  };
  const onPressAddText = () => {
    // eslint-disable-next-line no-console
    console.warn('This feature is not yet available');
  };
  return (
    <View style={styles.container}>
      <ViewNative style={styles.floatingHeader}>
        <ViewNative style={styles.buttonsContainer}>
          <Button
            onPress={onPressBack}
            style={styles.button}
            childrenPosition="center">
            <Ionicons
              name="chevron-back"
              size={20}
              color={Colors.light.primary.background}
            />
          </Button>
          <ViewNative style={styles.buttonsContainer}>
            <Link href="/(tabs)/upload/modal" asChild>
              <Button
                onPress={() => {}}
                style={styles.button}
                childrenPosition="center">
                <Ionicons
                  name="musical-notes"
                  size={20}
                  color={Colors.light.primary.background}
                />
              </Button>
            </Link>
            <Button
              onPress={onPressAddText}
              style={styles.button}
              childrenPosition="center">
              <Ionicons
                name="text"
                size={20}
                color={Colors.light.primary.background}
              />
            </Button>
            <Button
              onPress={onToggleVolume}
              style={styles.button}
              childrenPosition="center">
              <Ionicons
                name={isMuted ? 'volume-mute' : 'volume-high'}
                size={20}
                color={Colors.light.primary.background}
              />
            </Button>
            <Button
              style={[
                styles.button,
                { backgroundColor: Colors.light.primary.background },
              ]}
              childrenPosition="center"
              onPress={onCreatePost}>
              <Ionicons
                name="arrow-forward"
                size={18}
                color={Colors.dark.primary.background}
              />
            </Button>
          </ViewNative>
        </ViewNative>
      </ViewNative>
      <VideoPlayer
        videoUrl={postUri}
        videoRef={videoRef}
        videoStatus={videoStatus}
        isLooping={true}
        shouldPlay={true}
      />
    </View>
  );
};

export default PreviewPostTemplate;
