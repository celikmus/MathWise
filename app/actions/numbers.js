import { getRandomInteger, operators, shuffle } from '../utils/numbers';

export const STORE_DRAWN_NUMBERS = 'STORE_DRAWN_NUMBERS';

const drawDivisionNumbers = level => {
  const set = new Set();
  while (set.size < 4) {
    set.add(getRandomInteger(2, 16));
  }
  let values = Array.from(set.values());
  const dividend = values[0] * values[1];
  const result = values[0];
  values.splice(0, 1, dividend);
  const options = shuffle(values);
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

export const storeDrawnNumbers = drawnNumbers => ({
  type: STORE_DRAWN_NUMBERS,
  ...drawnNumbers()
});
