export const getCalendaryFormat = nowDate => {
  const date = new Date(nowDate);
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth();
  const monthFirstDay = new Date(year, month, 1);
  const monthLastDay = new Date(year, month + 1, 0);
  const daysForMonth = monthLastDay.getDate();
  const startWeekDay = (monthFirstDay.getDay() + 7) % 7;
  const weeks = [];
  let currentWeek = [];
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  for (let i = startWeekDay - 2; i >= 0; i--) {
    currentWeek.push({
      day: prevMonthLastDay - i,
      month: getPastandFutureMonths(nowDate).pastMonth,
      disabled: true,
    });
  }
  for (let i = 1; i <= daysForMonth; i++) {
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    currentWeek.push({ day: i, month: nowDate.slice(0, 7), disabled: false });
  }
  const lastWeekDay = (monthLastDay.getDay() + 7) % 7;
  for (let i = 1; i <= 7 - lastWeekDay; i++) {
    currentWeek.push({
      day: i,
      month: getPastandFutureMonths(nowDate).futureMonth,
      disabled: true,
    });
  }
  weeks.push(currentWeek);

  return weeks;
};
function getPastandFutureMonths(monthString) {
  const [yearStr, monthStr] = monthString.split('-');
  const year = parseInt(yearStr);
  const month = parseInt(monthStr);
  const pastMonth = month === 1 ? 12 : month - 1;
  const pastYear = month === 1 ? year - 1 : year;
  const nextMonth = month === 12 ? 1 : month + 1;
  const nextYear = month === 12 ? year + 1 : year;
  return {
    pastMonth: `${pastYear}-${pastMonth.toString().padStart(2, '0')}`,
    futureMonth: `${nextYear}-${nextMonth.toString().padStart(2, '0')}`,
  };
}
