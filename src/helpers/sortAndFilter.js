export const sortAndFilter = (data, options) => {
  let sortedData = data;
  const timeNow = new Date().getTime();

  const defaults = {
    sortby: 'time',
    order: 'asc',
    filter: 'all',
  };
  options = { ...defaults, ...options };

  // Filtering
  if ('next' === options.filter) {
    sortedData = sortedData.filter((obj) => obj.time > timeNow);
  }

  if ('finished' === options.filter) {
    sortedData = sortedData.filter((obj) => obj.time < timeNow);
  }

  // Sorting
  if ('name' === options.sortby) {
    const data = sortedData.slice();

    data.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      const order = options.order === 'asc' ? 1 : -1;

      return nameA.localeCompare(nameB) * order;
    });

    sortedData = data;
  }

  if ('time' === options.sortby) {
    const data = sortedData.slice();

    data.sort((a, b) => {
      const A = a.time;
      const B = b.time;

      return options.order === 'asc' ? A - B : B - A;
    });

    sortedData = data;
  }

  return sortedData;
};
