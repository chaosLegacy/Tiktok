import React from 'react';

import { useLocalSearchParams } from 'expo-router';

import PreviewPostTemplate from '@/components/templates/PreviewPostTemplate';

const previewPost = () => {
  const { uri } = useLocalSearchParams();
  return <PreviewPostTemplate postUri={uri as string} />;
};

export default previewPost;
