import { useDispatch, useSelector } from 'react-redux';
import css from './StatisticsChart.module.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
} from 'recharts';
import { fetchTasks } from 'redux/tasks/taskOperation';
import { useEffect } from 'react';
import { selectAllTasks } from 'redux/tasks/selectors';

const tasks = [
  {
    title: 'Task 1',
    date: '2023-06-28',
    start: '09:00',
    end: '17:00',
    priority: 'medium',
    category: 'to-do',
  },
  {
    title: 'Task 4',
    date: '2023-06-30',
    start: '09:00',
    end: '17:00',
    priority: 'medium',
    category: 'to-do',
  },
  {
    title: 'Task 2',
    date: '2023-06-30',
    start: '09:00',
    end: '17:00',
    priority: 'medium',
    category: 'in-progress',
  },
  {
    title: 'Task 3',
    date: '2023-06-30',
    start: '09:00',
    end: '17:00',
    priority: 'medium',
    category: 'done',
  },
  {
    title: 'Task 3',
    date: '2023-07-28',
    start: '09:00',
    end: '17:00',
    priority: 'medium',
    category: 'done',
  },
  {
    title: 'Task 3',
    date: '2023-06-02',
    start: '09:00',
    end: '17:00',
    priority: 'medium',
    category: 'done',
  },
];

const currentDay = '2023-06-30';
const currentMonth = 5;
// 5 - означает 6-ой месяц-июнь

export const StatisticsChart = () => {
  const dispatch = useDispatch();
  const tasksBD = useSelector(selectAllTasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  console.log(tasksBD);

  // Вычисляем ByDay

  const tasksByCurrentDay = tasks.filter(task => task.date === currentDay);
  const sumTasksToDoDay = tasksByCurrentDay.filter(
    task => task.category === 'to-do'
  ).length;
  const sumTasksInProgressDay = tasksByCurrentDay.filter(
    task => task.category === 'in-progress'
  ).length;
  const sumTasksDoneDay = tasksByCurrentDay.filter(
    task => task.category === 'done'
  ).length;

  // Вычисляем ByMonth

  const funcTasksByCurMonth = (tasks, currentMonth) => {
    const tasksByCurMonth = tasks.filter(
      task => new Date(task.date).getMonth() === currentMonth
    );
    return tasksByCurMonth;
  };

  const tasksByCurrentMonth = funcTasksByCurMonth(tasks, currentMonth);

  const sumTasksToDoMonth = tasksByCurrentMonth.filter(
    task => task.category === 'to-do'
  ).length;
  const sumTasksInProgressMonth = tasksByCurrentMonth.filter(
    task => task.category === 'in-progress'
  ).length;
  const sumTasksDoneMonth = tasksByCurrentMonth.filter(
    task => task.category === 'done'
  ).length;

  //Создаем объкты tasksToDo, tasksInProgress, tasksDone => в массив tasksForChart, который будет использовыть график

  const tasksToDo = {};
  tasksToDo.name = 'To Do';
  tasksToDo.ByDay = sumTasksToDoDay;
  tasksToDo.ByMonth = sumTasksToDoMonth;
  tasksToDo.ByDayPercent = 0;
  tasksToDo.ByMonthPercent = 0;

  const tasksInProgress = {};
  tasksInProgress.name = 'in Progress';
  tasksInProgress.ByDay = sumTasksInProgressDay;
  tasksInProgress.ByMonth = sumTasksInProgressMonth;
  tasksInProgress.ByDayPercent = 0;
  tasksInProgress.ByMonthPercent = 0;

  const tasksDone = {};
  tasksDone.name = 'Done';
  tasksDone.ByDay = sumTasksDoneDay;
  tasksDone.ByMonth = sumTasksDoneMonth;
  tasksDone.ByDayPercent = 0;
  tasksDone.ByMonthPercent = 0;

  const tasksForChart = [].concat(tasksToDo, tasksInProgress, tasksDone);

  // Вычисляем ByDayPercent

  const arrayByDay = tasksForChart.map(task => task.ByDay);
  const allTasksByDay = arrayByDay.reduce((acc, number) => acc + number);

  const ByDayPer = arrayByDay.map(
    item => (item / allTasksByDay).toFixed(2) * 100 + '%'
  );

  tasksToDo.ByDayPercent = ByDayPer[0];
  tasksInProgress.ByDayPercent = ByDayPer[1];
  tasksDone.ByDayPercent = ByDayPer[2];

  // Вычисляем ByMonthPercent

  const arrayByMonth = tasksForChart.map(task => task.ByMonth);
  const allTasksByMonth = arrayByMonth.reduce((acc, number) => acc + number);

  const ByMonthPer = arrayByMonth.map(
    item => (item / allTasksByMonth).toFixed(2) * 100 + '%'
  );

  tasksToDo.ByMonthPercent = ByMonthPer[0];
  tasksInProgress.ByMonthPercent = ByMonthPer[1];
  tasksDone.ByMonthPercent = ByMonthPer[2];

  return (
    <>
      <p className={css.tasks}>
        <b>Tasks</b>
      </p>
      <BarChart
        width={780}
        height={400}
        data={tasksForChart}
        margin={{
          top: 35,
          right: 0,
          left: 20,
          bottom: 50,
        }}
      >
        <CartesianGrid stroke="#E3F3FF" strokeDasharray="0" vertical={false} />
        <XAxis dataKey="name" stroke="0" />
        <YAxis stroke="0" />
        <Tooltip />
        <defs>
          <linearGradient id="colorDay" x1="0" y1="1" x2="0" y2="0">
            <stop offset="1%" stopColor="#FFD2DD" stopOpacity={0.8} />
            <stop offset="99%" stopColor="#FFD2DD" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorMonth" x1="0" y1="1" x2="0" y2="0">
            <stop offset="1%" stopColor="#3E85F3" stopOpacity={0.8} />
            <stop offset="99%" stopColor="#3E85F3" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Bar dataKey="ByDay" fill="url(#colorDay)" barSize={27}>
          <LabelList dataKey="ByDayPercent" position="top" stroke="#343434" />
        </Bar>
        <Bar
          className={css.shapebar}
          dataKey="ByMonth"
          fill="url(#colorMonth)"
          barSize={27}
        >
          <LabelList dataKey="ByMonthPercent" position="top" stroke="#343434" />
        </Bar>
      </BarChart>
    </>
  );
};
