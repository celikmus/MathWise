//The maximum is exclusive and the minimum is inclusive
const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const shuffle = o => {
  for (
    let j, x, i = o.length;
    i;
    j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
  );
  return o;
};

const operators = {
  division: 'division',
  multiply: 'multiply',
  sum: 'sum',
  subtract: 'subtract',
  equal: 'equal'
};

export { getRandomInteger, operators, shuffle };
