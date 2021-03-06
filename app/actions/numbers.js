import { getRandomInteger, operators, shuffle } from '../utils/numbers';
export const DECREMENT_SCORE = 'DECREMENT_SCORE';
export const INCREMENT_SCORE = 'INCREMENT_SCORE';
export const RESET_COUNTERS = 'RESET_COUNTERS';
export const STORE_DRAWN_NUMBERS = 'STORE_DRAWN_NUMBERS';
export const TICK_PASS_COUNT = 'TICK_PASS_COUNT';

export const decrementScore = selectedOperator => ({
  type: DECREMENT_SCORE,
  selectedOperator
});

const drawDivisionNumbers = level => {
  const set = new Set();
  while (set.size < 4) {
    set.add(getRandomInteger(2, 16));
  }
  let values = Array.from(set.values());
  const dividend = values[0] * values[1];
  const result = values[0];
  const newSet = new Set([dividend, values[1]]);
  const maxValue = Math.max(dividend, 16);
  while (newSet.size < 4) {
    const newOption = getRandomInteger(2, maxValue);
    newOption !== dividend && newSet.add(newOption);
  }
  const options = shuffle(Array.from(newSet));
  return {
    result,
    options
  };
};

const drawMultiplyNumbers = level => {
  const set = new Set();
  while (set.size < 4) {
    set.add(getRandomInteger(2, 16));
  }
  const values = Array.from(set.values());
  const result = values[0] * values[1];
  const options = shuffle(values);
  return {
    result,
    options
  };
};

const drawSumNumbers = level => {
  const set = new Set();
  while (set.size < 4) {
    set.add(getRandomInteger(1, 10));
  }
  const values = Array.from(set.values());
  const result = values[0] + values[1];
  const options = shuffle(values);
  return {
    result,
    options
  };
};

const drawTakeawayNumbers = level => {
  const set = new Set();
  while (set.size < 4) {
    set.add(getRandomInteger(1, 10));
  }
  const values = Array.from(set.values());
  const result = Math.abs(values[0] - values[1]);
  const options = shuffle(values);
  return {
    result,
    options
  };
};

export const drawNumbers = (selectedOperator = 'sum', level = 0) => {
  let giveNumbers = () => {};
  switch (selectedOperator) {
    case operators.division:
      giveNumbers = () => drawDivisionNumbers(level);
      break;
    case operators.multiply:
      giveNumbers = () => drawMultiplyNumbers(level);
      break;
    case operators.sum:
      giveNumbers = () => drawSumNumbers(level);
      break;
    case operators.subtract:
      giveNumbers = () => drawTakeawayNumbers(level);
      break;
  }
  return giveNumbers();
};

export const incrementScore = selectedOperator => ({
  type: INCREMENT_SCORE,
  selectedOperator
});

export const resetCounters = () => ({
  type: RESET_COUNTERS
});

export const tickPassCount = selectedOperator => ({
  type: TICK_PASS_COUNT,
  selectedOperator
});
