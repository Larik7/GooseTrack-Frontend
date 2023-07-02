import { isToken, selectIsLoggedIn } from 'redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const token = useSelector(isToken);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn && token ? <Navigate to={redirectTo} replace /> : Component;
};
