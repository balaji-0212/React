import axios from 'axios';
import { useEffect, useState } from 'react';

export function useApi(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(Boolean(url));

  useEffect(() => {
    if (!url) return undefined;
    const controller = new AbortController();
    let active = true;
    setLoading(true);
    setError('');

    axios
      .get(url, { signal: controller.signal })
      .then((response) => {
        if (active) setData(response.data);
      })
      .catch((requestError) => {
        if (active && requestError.name !== 'CanceledError') {
          setError(requestError.message || 'Unable to load data');
        }
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
      controller.abort();
    };
  }, [url]);

  return { data, error, loading };
}
