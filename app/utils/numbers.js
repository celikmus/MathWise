//The maximum is exclusive and the minimum is inclusive
const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const operators = {
  division: 'division',
  multiply: 'multiply',
  sum: 'sum',
  subtract: 'subtract',
  equal: 'equal'
};

export { getRandomInteger, operators };
