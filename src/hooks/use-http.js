import React, { useState } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  async function getHttpData(url, getData, options) {
    setIsLoading(true);
    setIsError(null);
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('something went wrong');
      }
      const data = await response.json();

      // if (!data) {
      //   throw new Error('No Data Error');
      // }
      getData(data);
    } catch (err) {
      console.log(err.message);
      setIsError(err);
    }
    setIsLoading(false);
  }
  return {
    isLoading,
    isError,
    getHttpData,
  };
};

export default useHttp;
