const calculateMean = require("./mean");

function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);

  let median;
  if (middleIndex % 2 === 0) {
    median = list[middleIndex];
  } else {
    median = calculateMean([list[middleIndex - 1], list[middleIndex]]);
  }

  return median;
}

module.exports = calculateMedian;
