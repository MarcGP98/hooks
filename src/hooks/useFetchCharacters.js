import { useEffect, useState } from 'react';

function useFetchCharacters(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((dataApi) => setData(dataApi));
  }, [url]);

  return data;
}

export default useFetchCharacters;