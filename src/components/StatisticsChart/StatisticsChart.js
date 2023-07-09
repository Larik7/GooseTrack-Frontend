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
  ResponsiveContainer,
} from 'recharts';
import { fetchTasks } from 'redux/tasks/taskOperation';
import { useEffect, useState } from 'react';
import { selectAllTasks } from 'redux/tasks/selectors';

export const StatisticsChart = ({ selectedDate }) => {
  const dispatch = useDispatch();
  const tasksBD = useSelector(selectAllTasks);
  const [currentDate, setCurrentDate] = useState(selectedDate);
  const [currentDay, setCurrentDay] = useState(
    currentDate.toISOString().split('T')[0]
  );
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());

  useEffect(() => {
    dispatch(fetchTasks());
    setCurrentDate(selectedDate);
    setCurrentDay(selectedDate.toISOString().split('T')[0]);
    setCurrentMonth(selectedDate.getMonth());
  }, [dispatch, selectedDate]);

  // Вычисляем ByDay

  const tasksByCurrentDay = tasksBD.filter(task => task.date === currentDay);
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

  const funcTasksByCurMonth = (tasksBD, currentMonth) => {
    const tasksByCurMonth = tasksBD.filter(
      task => new Date(task.date).getMonth() === currentMonth
    );
    return tasksByCurMonth;
  };

  const tasksByCurrentMonth = funcTasksByCurMonth(tasksBD, currentMonth);

  const sumTasksToDoMonth = tasksByCurrentMonth.filter(
    task => task.category === 'to-do'
  ).length;
  const sumTasksInProgressMonth = tasksByCurrentMonth.filter(
    task => task.category === 'in-progress'
  ).length;
  const sumTasksDoneMonth = tasksByCurrentMonth.filter(
    task => task.category === 'done'
  ).length;

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
  const ByDayPer = arrayByDay.map(item => {
    if (allTasksByDay === 0) {
      return '0%';
    }
    return Math.round((item / allTasksByDay) * 100) + '%';
  });

  tasksToDo.ByDayPercent = ByDayPer[0];
  tasksInProgress.ByDayPercent = ByDayPer[1];
  tasksDone.ByDayPercent = ByDayPer[2];

  // Вычисляем ByMonthPercent

  const arrayByMonth = tasksForChart.map(task => task.ByMonth);
  const allTasksByMonth = arrayByMonth.reduce((acc, number) => acc + number);

  const ByMonthPer = arrayByMonth.map(item => {
    if (allTasksByMonth === 0) {
      return '0%';
    }
    return Math.round((item / allTasksByMonth) * 100) + '%';
  });

  tasksToDo.ByMonthPercent = ByMonthPer[0];
  tasksInProgress.ByMonthPercent = ByMonthPer[1];
  tasksDone.ByMonthPercent = ByMonthPer[2];

  const strokeVar = 'var(--primary-text-color)';
  const backgraondColor = 'var(--tooltip-color)';

  return (
    <>
      <p className={css.tasks}>
        <b>Tasks</b>
      </p>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={tasksForChart}
          margin={{
            top: 35,
            right: 0,
            left: 20,
            bottom: 50,
          }}
        >
          <CartesianGrid
            stroke="#E3F3FF"
            strokeDasharray="0"
            vertical={false}
          />
          <XAxis dataKey="name" stroke="0" tick={{ fill: strokeVar, dy: 10 }} />
          <YAxis stroke="0" tick={{ fill: strokeVar, dx: -20 }} />
          <Tooltip
            contentStyle={{
              color: strokeVar,
              backgroundColor: backgraondColor,
              borderRadius: '10px',
            }}
          />

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
          <Bar
            dataKey="ByDay"
            fill="url(#colorDay)"
            barSize={27}
            radius={[0, 0, 10, 10]}
          >
            <LabelList
              dataKey="ByDayPercent"
              position="top"
              fill={strokeVar}
              fontWeight="lighter"
            />
          </Bar>
          <Bar
            dataKey="ByMonth"
            fill="url(#colorMonth)"
            barSize={27}
            radius={[0, 0, 10, 10]}
          >
            <LabelList
              dataKey="ByMonthPercent"
              position="top"
              fill={strokeVar}
              fontWeight="lighter"
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};
