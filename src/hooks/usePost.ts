import { useEffect, useState } from 'react';

import { GraphQLResult } from '@aws-amplify/api';
import { API, graphqlOperation } from 'aws-amplify';

import { ListPostsQuery } from '@/API';
import { listPosts } from '@/graphql/queries';

const LIMIT = 1;
const useGePosts = () => {
  const [data, setData] = useState<ListPostsQuery>();
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(false);

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

export { useGePosts };
