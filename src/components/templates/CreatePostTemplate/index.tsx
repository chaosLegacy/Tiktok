import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { TextInput, View } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { router } from 'expo-router';
import { v4 as uuidv4 } from 'uuid';
import * as yup from 'yup';

import styles from './styles';

import { Button } from '@/components/atoms/Button';
import Container from '@/components/atoms/Container';
import { Text } from '@/components/atoms/Text';
import Colors from '@/constants/Colors';
import { useAddPost } from '@/hooks/usePost';
import { useSetStorage } from '@/hooks/useStorage';
import { useGetAuthenticatedUser } from '@/hooks/useUser';
import { uriToBlob } from '@/utils';

type CreatePostTemplateProps = {
  postUri: string;
};
const CreatePostTemplate = ({ postUri }: CreatePostTemplateProps) => {
  const schema = yup
    .object({
      description: yup.string().required(),
      //   age: yup.number().positive().integer().required(),
    })
    .required();
  type FormData = yup.InferType<typeof schema>;
  const [fileKey, setFileKey] = useState<string>();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      description: '',
    },
    resolver: yupResolver(schema),
  });
  const { setQuery } = useSetStorage();
  const { data: currentUser } = useGetAuthenticatedUser();
  const { setQuery: _addPost } = useAddPost();
  const uploadToStorage = async () => {
    try {
      if (!currentUser) return;
      const blob: Blob = await uriToBlob(postUri);
      const fileName = `${
        currentUser.attributes.sub
      }/videos/video-${uuidv4()}.mp4`;
      const result = await setQuery(fileName, blob);
      if (result) {
        setFileKey(result.key);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(error));
    }
  };

  useEffect(() => {
    uploadToStorage();
  }, [currentUser]);

  const onSubmit = async (data: FormData) => {
    if (!currentUser || !fileKey) {
      return;
    }
    try {
      const response = await _addPost({
        userID: currentUser.attributes.sub,
        description: data.description,
        videoUri: fileKey,
      });
      if (response?.data) {
        router.push({ pathname: '/(tabs)/' });
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return (
    <Container style={styles.container}>
      <View>
        <Text style={styles.label}>Description</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              numberOfLines={5}
              placeholder="Description"
            />
          )}
          name="description"
          rules={{ required: true }}
        />
        <Text>{errors.description?.message}</Text>
      </View>

      <View>
        <Button
          style={styles.button}
          label="Reset"
          textColor={Colors.dark.primary.text}
          fullWidth
          rounded
          onPress={() => {
            reset({
              description: 'Lorem ipsum',
            });
          }}
        />
        <Button
          style={styles.button}
          label="Publish"
          textColor={Colors.dark.primary.text}
          fullWidth
          rounded
          childrenPosition="none"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </Container>
  );
};

export default CreatePostTemplate;
