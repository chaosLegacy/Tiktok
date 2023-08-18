import { useEffect, useState } from 'react';

import { GraphQLResult } from '@aws-amplify/api';
import { API, Auth, graphqlOperation } from 'aws-amplify';

import { User } from '@/API';
import { getUser } from '@/graphql/queries';
import { CognitoUserExt } from '@/types';

const useGetAuthenticatedUser = () => {
  const [data, setData] = useState<CognitoUserExt>();
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(false);

  const queryData = async () => {
    try {
      setLoading(true);
      const response = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      setData(response);
    } catch (err) {
      setError(err);
      console.error('ERROR: useGetAuthenticatedUser: ', err);
    }
    setLoading(false);
  };

  useEffect(() => {
    queryData();
  }, []);

  return { data, error, loading };
};

const useGetUser = (currentUser?: boolean, id?: string) => {
  const [data, setData] = useState<User>();
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(false);

  const queryData = async () => {
    try {
      setLoading(true);
      if (!currentUser || !id) {
        return undefined;
      }
      let userId;
      if (currentUser) {
        const { data: authenticatedUser } = useGetAuthenticatedUser();
        userId = authenticatedUser?.attributes.sub;
      } else {
        userId = id;
      }
      const response = (await API.graphql(
        graphqlOperation(getUser, { id: userId }),
      )) as GraphQLResult<{ getUser: User }>;
      setData(response.data?.getUser);
    } catch (err) {
      setError(err);
      console.error('ERROR: useGetAuthenticatedUser: ', err);
    }
    setLoading(false);
  };

  useEffect(() => {
    queryData();
  }, []);

  return { data, error, loading };
};

export { useGetAuthenticatedUser, useGetUser };
