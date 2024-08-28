// components/PrivateRoute.tsx
import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../../app/hook';
import URL_CONST from '../../constants/URL_const';
import ForbiddenPage from '../../pages/ForbiddenPage';

const PrivateRoute = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? <Outlet /> : <ForbiddenPage />;
};

export default PrivateRoute;
