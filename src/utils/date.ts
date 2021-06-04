export const getTime = (dateString: string) => {
  const date = new Date(+dateString);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

export const getTimeAMPMFormat = (dateString: string | number) => {
  const date = new Date(+dateString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${hours < 12 ? '오전 ' : '오후 '}${
    hours % 12 || 12
  }:${minutes.toString().padStart(2, '0')}`;
};

const getDayMonth = (dateString: string) => {
  /** format: Month / Day */
  return new Date(+dateString).toLocaleDateString('ko', {
    day: 'numeric',
    month: 'long',
  });
};

const getMonthDayYear = (dateString: string | number) => {
  /** format: , Year, Month Day */
  return new Date(+dateString).toLocaleDateString('ko', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const getDayDifferFromToday = (dateString: string) => {
  const date = new Date(new Date(+dateString).toDateString()).getTime();
  const today = new Date(new Date().toDateString()).getTime();
  const timeDiff = Math.abs(today - date);
  return Math.round(timeDiff / (1000 * 60 * 60 * 24));
};

export const getDateLabel = (dateString: string) => {
  const dayDiff = getDayDifferFromToday(dateString);
  // eslint-disable-next-line no-nested-ternary
  return dayDiff === 0
    ? getTimeAMPMFormat(dateString)
    : dayDiff === 1
    ? '어제'
    : getMonthDayYear(dateString);
};
