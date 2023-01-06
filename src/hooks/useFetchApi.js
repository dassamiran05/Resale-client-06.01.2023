
import axios from "axios";
import { useEffect, useState } from "react";



const useFetchApi = (api) => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    // console.log(api);
    // let source = axios.CancelToken.source();
    const apiCall = async () => {
      const res = await axios.get(api);
      setData(res.data.data);
    };
    apiCall();
    // return () => source.cancel();
  }, [api]);

  return [data];
};


export default useFetchApi;
