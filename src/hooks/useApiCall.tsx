import { useState, useCallback, useEffect } from 'react';



const useApiCall = <T, A extends unknown[]>(
  serviceFunction: (...args: A) => Promise<{ data: T }>,
  autoFetch: boolean = false,
  initialArgs?: A
) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);


  const callApi = useCallback(
    async (...args: A): Promise<T> => {
      setLoading(true);
      setError(null);

      try {
        const {data} = await serviceFunction(...args);
        setData(data);
        return data;
      } catch (err) {
        setError(err as Error);
        console.error('API Call Error:', err);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [serviceFunction]
  );

  
  useEffect(() => {
    if (autoFetch && initialArgs) {
      callApi(...initialArgs).catch((err) => {
        console.error("Error:",err);
      });
    }
  }, [autoFetch, callApi, initialArgs]);

  return { loading, data, error};
};

export default useApiCall;
