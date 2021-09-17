import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState
} from 'react';
import Axios, { AxiosResponse } from 'axios';
import { FeedBackInterface } from '../../Interfaces/FeedInterface';

export const myContext = createContext<Partial<FeedBackInterface>>({});
export default function Context(props: PropsWithChildren<any>) {
  const [user, setUser] = useState<FeedBackInterface>();
  useEffect(() => {
    Axios.get('http://localhost:4000/feed', { withCredentials: true }).then(
      (res: AxiosResponse) => {
        setUser(res.data);
        console.log(res.data);
      }
    );
  }, []);

  return (
    <myContext.Provider value={user!}>{props.children}</myContext.Provider>
  );
}
