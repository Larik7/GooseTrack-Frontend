import { LoginForm } from 'components/LoginForm/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/authOperation';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { Vortex } from 'react-loader-spinner';
export const LoginPage = () => {
  const dispatch = useDispatch();
  const isLogIn = useSelector(selectIsRefreshing);

  const handleSumbit = (values, { resetForm }) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  return (
    <div>
      {isLogIn && (
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          wrapperClass="vortex-wrapper"
          colors={['blue', 'blue', 'blue', 'yellow', 'yellow', 'yellow']}
        />
      )}
      <LoginForm handleSumbit={handleSumbit} />
    </div>
  );
};
