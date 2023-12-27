import { useEffect, useState } from 'react';
import { closestTime as getClosestTime } from '../helpers/closestTime.js';

export const useNextCall = (data) => {
  const [value, setValue] = useState(null);

  const prepareNextCall = () => {
    const timestampArray = data.map((obj) => obj.time);
    const closestTime = getClosestTime(timestampArray);

    return data.find((obj) => obj.time === closestTime);
  };

  useEffect(() => {
    setValue(prepareNextCall());

    const interval = setInterval(() => {
      setValue(prepareNextCall());
    }, 30000);

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return value;
};
