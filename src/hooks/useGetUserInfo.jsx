import { useContext } from 'react';
import AuthContext from '../context/AuthContext'

const useGetUserInfo = () => {
    const AuthCtx = useContext(AuthContext);
    const user = AuthCtx.auth.user;
  return user
}

export default useGetUserInfo