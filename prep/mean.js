const calculateMean = (list) => {
  let total = 0;
  for (item of list) total += item;

  return total / list.length;
};

module.exports = calculateMean;
