import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { selectAllTasks, selectActiveDate } from 'redux/tasks/selectors';
import { DayCalendarHead } from './DayCalendarHead/DayCalendarHead';
import { TasksColumnsList } from '../../Task/TasksColumnsList/TasksColumnsList';

import css from './ChoosedDay.module.css';

const emptySortedTask = {
  done: [],
  inProgress: [],
  toDo: [],
};

export const ChoosedDay = ({ setSelectedDay }) => {
  const tasks = useSelector(selectAllTasks);
  const isDate = useSelector(selectActiveDate);

  const [sortedTasks, setSortedTasks] = useState(emptySortedTask);

  function sortByStartTime(array) {
    return array.sort((a, b) => b.start.localeCompare(a.start));
  }

  function filterByDate(array, isDate) {
    return array.filter(item => item.date === isDate);
  }
  useEffect(() => {
    function getCategorizedArrays(data, isDate) {
      const filteredData = filterByDate(data, isDate);

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
      const categorizedArrays = getCategorizedArrays(tasks, isDate);
      setSortedTasks(categorizedArrays);
    }
  }, [isDate, tasks]);

  return (
    <div className={css.container}>
      <DayCalendarHead setSelectedDay={setSelectedDay} />
      {sortedTasks && <TasksColumnsList sortedTasksData={sortedTasks} />}
    </div>
  );
};
