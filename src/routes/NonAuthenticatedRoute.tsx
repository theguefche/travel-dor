import { useTypedSelector } from '@app-store';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const NonAuthenticatedRoute = () => {
  const location = useLocation();
  const isLoggedIn = useTypedSelector((state) => state.auth.isLoggedIn);

  return !isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
}

export default NonAuthenticatedRoute;
