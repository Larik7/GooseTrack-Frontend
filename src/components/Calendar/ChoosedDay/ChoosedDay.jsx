import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectAllTasks } from 'redux/tasks/selectors';
import { DayCalendarHead } from './DayCalendarHead/DayCalendarHead';
import { TasksColumnsList } from '../../Task/TasksColumnsList/TasksColumnsList';
import { useParams } from 'react-router-dom';
import css from './ChoosedDay.module.css';

const emptySortedTask = {
  done: [],
  inProgress: [],
  toDo: [],
};

export const ChoosedDay = ({ setSelectedDay }) => {
  const { currentDay } = useParams();
  // console.log(currentDay);

  const tasks = useSelector(selectAllTasks);

  const [sortedTasks, setSortedTasks] = useState(emptySortedTask);

  // Функція для сортування масиву за полем "start time"
  function sortByStartTime(array) {
    return array.sort((a, b) => b.start.localeCompare(a.start));
  }

  // Функція для фільтрації масиву об'єктів за конкретним днем
  function filterByDate(array, currentDay) {
    return array.filter(item => item.date === currentDay);
  }
  useEffect(() => {
    // Оновлена функція для отримання трьох масивів об'єктів за категорією та відсортованих за датою
    function getCategorizedArrays(data, currentDay) {
      const filteredData = filterByDate(data, currentDay);

      const doneArray = [];
      const inProgressArray = [];
      const toDoArray = [];

      for (const item of filteredData) {
        if (item.category === 'done') {
          doneArray.push(item);
        } else if (item.category === 'in-progress') {
          inProgressArray.push(item);
        } else if (item.category === 'to-do') {
          toDoArray.push(item);
        }
      }

      return {
        done: sortByStartTime(doneArray),
        inProgress: sortByStartTime(inProgressArray),
        toDo: sortByStartTime(toDoArray),
      };
    }

    if (tasks) {
      const categorizedArrays = getCategorizedArrays(tasks, currentDay);
      setSortedTasks(categorizedArrays);
    }
  }, [currentDay, tasks]);

  return (
    <div className={css.container}>
      <DayCalendarHead setSelectedDay={setSelectedDay} />
      {sortedTasks && <TasksColumnsList sortedTasksData={sortedTasks} />}
    </div>
  );
};
