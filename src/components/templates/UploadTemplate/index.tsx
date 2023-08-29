import React, { useRef } from 'react';

import { useIsFocused } from '@react-navigation/native';
import { Camera, CameraRecordingOptions, VideoQuality } from 'expo-camera';
import { router } from 'expo-router';

import { View } from '../Themed';

import CameraComponent from '@/components/molecules/Camera';
import { MAX_VIDEO_LENGTH } from '@/constants';

const UploadTemplate = () => {
  const isFocused = useIsFocused();
  const cameraRef = useRef<Camera>(null);

  const cameraOptions: CameraRecordingOptions = {
    maxDuration: MAX_VIDEO_LENGTH,
    mirror: true,
    mute: false,
    quality: VideoQuality['1080p'],
  };

  const onVideoRecorded = (uri: string) => {
    // eslint-disable-next-line no-console
    console.log('VIDEO RECORDED: ', uri);
    router.push({ pathname: '/(tabs)/upload/previewPost', params: { uri } });
  };

  if (!isFocused) return <View />;
  return (
    <CameraComponent
      cameraRef={cameraRef}
      cameraOptions={cameraOptions}
      onVideoRecorded={onVideoRecorded}
    />
  );
};

export default UploadTemplate;
