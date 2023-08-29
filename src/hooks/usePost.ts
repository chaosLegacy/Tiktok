import { useEffect, useState } from 'react';

import { GraphQLResult } from '@aws-amplify/api';
import { API, graphqlOperation } from 'aws-amplify';

import { CreatePostInput, CreatePostMutation, ListPostsQuery } from '@/API';
import { createPost } from '@/graphql/mutations';
import { listPosts } from '@/graphql/queries';
import { useGetStorage } from '@/hooks/useStorage';

const LIMIT = 5;
const useGePosts = () => {
  const [data, setData] = useState<ListPostsQuery>();
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(false);
  const { queryData: getImageUri } = useGetStorage();

  const queryData = async (nextToken?: string | null) => {
    try {
      setLoading(true);
      const response = (await API.graphql(
        graphqlOperation(listPosts, {
          //   filter: { status: { eq: ORDER_STATUS[ORDER_STATUS.NEW] } },
          limit: LIMIT,
          nextToken,
        }),
      )) as GraphQLResult<ListPostsQuery>;
      if (response.data?.listPosts?.items) {
        const dataWithImageUris = await Promise.all(
          response.data?.listPosts?.items.map(async (element) => {
            if (element) {
              const uri = await getImageUri(element.videoUri);
              if (uri) element.videoUri = uri;
            }
            return element;
          }),
        );
        response.data.listPosts.items = dataWithImageUris;
      }
      setData(response.data);

      return response;
    } catch (err) {
      setError(err);
      console.error('ERROR: useGePosts: ', err);
    }
    setLoading(false);
  };

  const fetchMore = async (nextToken?: string | null) => {
    return queryData(nextToken);
  };

  useEffect(() => {
    queryData();
  }, []);

  return { fetchMore, data, error, loading };
};

const useAddPost = () => {
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(false);

  type AddPostProps = {
    userID: string;
    songID?: string;
    videoUri: string;
    description: string;
  };
  const setQuery = async ({
    userID,
    songID,
    videoUri,
    description,
  }: AddPostProps) => {
    try {
      setLoading(true);
      const input: CreatePostInput = {
        userID,
        songID,
        videoUri,
        description,
      };
      const response = (await API.graphql(
        graphqlOperation(createPost, { input }),
      )) as GraphQLResult<CreatePostMutation>;
      return response;
    } catch (err) {
      setError(err);
      // eslint-disable-next-line no-console
      console.error('useAddPost Error -> setQuery: ', err);
    }
    setLoading(false);
  };
  return { setQuery, error, loading };
};

export { useGePosts, useAddPost };
