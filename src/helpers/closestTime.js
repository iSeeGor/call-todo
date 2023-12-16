export const closestTime = (arr) => {
  const currentTime = Date.now();
  let closest = null;
  let closestDiff = Infinity;

  for (let i = 0; i < arr.length; i++) {
    const timestamp = arr[i];

    if (timestamp > currentTime) {
      const diff = timestamp - currentTime;

      if (diff < closestDiff) {
        closest = arr[i];
        closestDiff = diff;
      }
    }
  }

  return closest;
};
