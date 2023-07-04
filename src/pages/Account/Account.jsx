import styles from './Account.module.css';
import { UserForm } from '../../components/UserForm/UserForm';

export const Account = () => {
  return (
    <div className={styles.container}>
      <UserForm />
    </div>
  );
};
