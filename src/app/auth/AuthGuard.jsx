import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const AuthGuard = ({ children }) => {
  const { isAuthenticated } = useSelector(state => state.auth);
  const { pathname } = useLocation();
  console.log({ isAuthenticated });
  if (isAuthenticated) return <>{children}</>;

  return <Navigate replace to="/login" state={{ from: pathname }} />;
};

export default AuthGuard;
