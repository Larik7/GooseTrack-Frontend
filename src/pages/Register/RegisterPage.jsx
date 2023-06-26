import RegisterForm from 'components/RegisterForm/RegisterForm';
import css from './RegisterPage.module.css';
import { ButtonNavigation } from '../../components/AuthNavigate/AuthNavigate';

export const RegisterPage = () => {
  return (
    <section className={css.register_page}>
      <RegisterForm />
      <ButtonNavigation
        route="/login"
        btnText="Log in"
        className={css.login_link}
      />
    </section>
  );
};
export default RegisterPage;
