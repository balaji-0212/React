import axios from 'axios';
import { useEffect, useState } from 'react';

export function useApi(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(Boolean(url));

  useEffect(() => {
    if (!url) return undefined;
    const controller = new AbortController();
    setLoading(true);
    setError('');

    axios
      .get(url, { signal: controller.signal })
      .then((response) => setData(response.data))
      .catch((requestError) => {
        if (requestError.name !== 'CanceledError') {
          setError(requestError.message || 'Unable to load data');
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [url]);

  return { data, error, loading };
}
