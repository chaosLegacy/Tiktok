import { useEffect, useState } from 'react';

import { GraphQLResult } from '@aws-amplify/api';
import { API, graphqlOperation } from 'aws-amplify';

import { ListSongsQuery, Song } from '@/API';
import { listSongs } from '@/graphql/queries';

const LIMIT = 20;
const useGetSongs = (name?: string, artist?: string) => {
  const [data, setData] = useState<Song[]>();
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(false);

  const queryData = async () => {
    try {
      setLoading(true);
      const response = (await API.graphql(
        graphqlOperation(listSongs, {
          //   filter: {
          //     or: { name: { contains: name }, artist: { contains: artist } },
          //   },
          filter: { name: { contains: name } },
          limit: LIMIT,
        }),
      )) as GraphQLResult<ListSongsQuery>;
      console.warn('response.data: ', response.data?.listSongs);
      setData(response.data?.listSongs?.items as Song[]);
    } catch (err) {
      setError(err);
      // eslint-disable-next-line no-console
      console.error('ERROR: useGetSongs: ', err);
    }
    setLoading(false);
  };

  useEffect(() => {
    queryData();
  }, [name, artist]);

  return { data, error, loading };
};

export { useGetSongs };
