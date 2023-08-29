import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { Ionicons } from '@expo/vector-icons';
import {
  Camera,
  CameraRecordingOptions,
  CameraType,
  VideoStabilization,
} from 'expo-camera';

import styles from './styles';

import { Button } from '@/components/atoms/Button';
import { View } from '@/components/templates/Themed';
import { MAX_VIDEO_LENGTH } from '@/constants';
import Colors from '@/constants/Colors';

type CameraComponentProps = {
  cameraRef: React.RefObject<Camera>;
  cameraOptions: CameraRecordingOptions;
  onVideoRecorded: (uri: string) => void;
};
const CameraComponent = ({
  cameraRef,
  cameraOptions,
  onVideoRecorded,
}: CameraComponentProps) => {
  const [type, setType] = useState(CameraType.back);
  const [cameraPermission, requestCameraPermission] =
    Camera.useCameraPermissions();
  const [audioPermission, requestAudioPermission] =
    Camera.useMicrophonePermissions();
  const [isRecording, setIsRecording] = useState<boolean>(true);

  useEffect(() => {
    if (!cameraPermission || !cameraPermission.granted) {
      requestCameraPermission();
    }
    if (!audioPermission || !audioPermission.granted) {
      requestAudioPermission();
    }
  }, [cameraPermission, audioPermission]);

  if (!cameraPermission || !audioPermission) {
    // Camera and audio permissions are still loading
    return <View />;
  }

  //   if (!permission.granted) {
  //     // Camera permissions are not granted yet
  //     return (
  //       <View style={styles.container}>
  //         <Text style={{ textAlign: 'center' }}>
  //           We need your permission to show the camera
  //         </Text>
  //         <Button onPress={requestPermission} label="grant permission" />
  //       </View>
  //     );
  //   }
  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back,
    );
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true, skipProcessing: true };
      const data = await cameraRef.current.takePictureAsync(options);
      const source = data.uri;
      if (source) {
        cameraRef.current.pausePreview();
        // setIsPreview(true);
        console.log('picture source', source);
      }
    }
  };

  const toggleRecording = async () => {
    if (cameraRef.current) {
      setIsRecording(!isRecording);
      if (isRecording) {
        cameraRef.current.stopRecording();
        return;
      }
      // setIsRecording(true);
      try {
        const data = await cameraRef.current.recordAsync(cameraOptions);
        setIsRecording(false);
        onVideoRecorded(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  };

  //   const onRecord = async () => {
  //     setIsRecording(!isRecording);
  //     if (isRecording) {
  //       cameraRef.current?.stopRecording();
  //     } else {
  //       const data = await cameraRef.current?.recordAsync(cameraOptions);
  //       console.log(data);
  //     }
  //   };

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        type={type}
        ratio="16:9"
        videoStabilizationMode={VideoStabilization.cinematic}>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            onPress={toggleCameraType}
            childrenPosition="left">
            <Ionicons
              name="color-filter-outline"
              size={24}
              color={Colors.light.primary.background}
            />
          </Button>
          {isRecording && (
            <AnimatedCircularProgress
              size={80}
              width={4}
              fill={100}
              tintColor="red"
              backgroundColor={Colors.light.primary.background}
              duration={(cameraOptions.maxDuration || MAX_VIDEO_LENGTH) * 1000}
              lineCap="round"
              rotation={0}
              onAnimationComplete={() => setIsRecording(false)}
              style={styles.animatedCircular}
            />
          )}

          <TouchableOpacity
            style={[
              styles.button,
              isRecording ? styles.buttonStopRecord : styles.buttonRecord,
            ]}
            onPress={toggleRecording}
          />

          <Button
            style={styles.button}
            onPress={toggleCameraType}
            childrenPosition="right">
            <Ionicons
              name="ios-camera-reverse-outline"
              size={24}
              color={Colors.light.primary.background}
            />
          </Button>
        </View>
      </Camera>
    </View>
  );
};

export default CameraComponent;
