import { useSelector } from 'react-redux';
import { selectActiveDate } from 'redux/tasks/selectors';

export const useValidation = () => {
  const isDate = useSelector(selectActiveDate);
  const date = new Date(isDate);

  if (Object.prototype.toString.call(date) === '[object Date]') {
    if (isNaN(date)) {
      return new Date();
    } else {
      return date;
    }
  }
};
