import { NavLink } from 'react-router-dom';

export const ButtonNavigation = ({
  route = '',
  btnText = 'btnText',
  children,
  className,
}) => {
  return (
    <NavLink className={className} to={`${route}`}>
      {btnText}
      {children}
    </NavLink>
  );
};
