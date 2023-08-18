import { useEffect, useState } from 'react';

import { GraphQLResult } from '@aws-amplify/api';
import { API, graphqlOperation } from 'aws-amplify';

import {
  CreateLikeInput,
  DeleteLikeInput,
  Like,
  LikesByPostIDQuery,
  LikesByPostIDQueryVariables,
} from '@/API';
import { createLike, deleteLike } from '@/graphql/mutations';
import { likesByPostID } from '@/graphql/queries';

const useCreateLike = (userID: string, postID: string) => {
  const [data, setData] = useState<Like>();
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(false);

  const _mutateCreateLike = async () => {
    try {
      setLoading(true);
      const input: CreateLikeInput = {
        userID,
        postID,
      };
      const response = (await API.graphql(
        graphqlOperation(createLike, { input }),
      )) as GraphQLResult<Like>;
      setData(response.data);
    } catch (err) {
      setError(err);
      // eslint-disable-next-line no-console
      console.error('ERROR: useCreateLike: ', err);
    }
    setLoading(false);
  };

  return { _mutateCreateLike, data, error, loading };
};

const useDeleteLike = () => {
  const [data, setData] = useState<Like>();
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(false);

  const _mutateDeleteLike = async (id?: string) => {
    try {
      if (!id) return;

      setLoading(true);
      const input: DeleteLikeInput = {
        id,
      };
      const response = (await API.graphql(
        graphqlOperation(deleteLike, { input }),
      )) as GraphQLResult<Like>;
      setData(response.data);
    } catch (err) {
      setError(err);
      // eslint-disable-next-line no-console
      console.error('ERROR: useDeleteLike: ', err);
    }
    setLoading(false);
  };

  return { _mutateDeleteLike, data, error, loading };
};

const useGetLikesByPostID = (postID: string) => {
  const [data, setData] = useState<LikesByPostIDQuery>();
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(false);

  const mutationData = async () => {
    try {
      setLoading(true);
      const input: LikesByPostIDQueryVariables = {
        postID,
      };
      const response = (await API.graphql(
        graphqlOperation(likesByPostID, input),
      )) as GraphQLResult<LikesByPostIDQuery>;
      setData(response.data);
    } catch (err) {
      setError(err);
      console.error('ERROR: useCreateLike: ', err);
    }
    setLoading(false);
  };

  useEffect(() => {
    mutationData();
  }, []);

  return { data, error, loading };
};

export { useCreateLike, useDeleteLike, useGetLikesByPostID };
