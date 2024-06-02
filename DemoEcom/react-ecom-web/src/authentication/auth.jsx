import useSignIn from 'react-auth-kit/hooks/useSignIn';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import { useUser } from './UserContext';

export const useAuth = () => {
  const signIn = useSignIn();
  const signOut = useSignOut();
  const { authenticateUser } = useUser();

  const login = (username, password) => {
    const user = authenticateUser(username, password);

    if (user) {
      signIn({
        token: 'fake-jwt-token',
        expiresIn: 3600,
        tokenType: 'Bearer',
        authState: { username: user.username },
      });
      return true;
    } else {
      return false;
    }
  };

  const logout = () => {
    signOut();
  };

  return { login, logout };
};

