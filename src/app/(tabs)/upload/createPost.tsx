import React from 'react';

import { useLocalSearchParams } from 'expo-router';

import CreatePostTemplate from '@/components/templates/CreatePostTemplate';

const createPost = () => {
  const { uri } = useLocalSearchParams();
  return <CreatePostTemplate postUri={uri as string} />;
};

export default createPost;
