import { useState } from 'react';

import { Storage } from 'aws-amplify';

const useGetStorage = () => {
  const [data, setData] = useState<string>();
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(false);

  const queryData = async (key?: string) => {
    if (!key) return;
    try {
      setLoading(true);
      const response = await Storage.get(key, {
        validateObjectExistence: true,
      });
      setData(response);
      return response;
    } catch (err) {
      setError(err);
      // eslint-disable-next-line no-console
      console.error('UseStorage Error -> getStorage: ', err);
    }
    setLoading(false);
  };

  return { queryData, data, error, loading };
};

const useSetStorage = () => {
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(false);

  const setQuery = async (key?: string, blob?: Blob) => {
    if (!key || !blob) {
      return;
    }
    try {
      setLoading(true);
      const response = await Storage.put(key, blob);
      return response;
    } catch (err) {
      setError(err);
      // eslint-disable-next-line no-console
      console.error('UseStorage Error -> getStorage: ', err);
    }
    setLoading(false);
  };
  return { setQuery, error, loading };
};

export { useGetStorage, useSetStorage };
