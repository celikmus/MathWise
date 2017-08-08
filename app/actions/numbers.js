import { getRandomInteger, operators } from '../utils/numbers';

export const STORE_DRAWN_NUMBERS = 'STORE_DRAWN_NUMBERS';

const drawDivisionNumbers = level => {
  return {
    result: 245,
    options: [10, 15, 56]
  };
};

const drawMultiplyNumbers = level => {
  return {
    result: 245,
    options: [10, 15, 56]
  };
};

const drawSumNumbers = level => {
  return {
    result: 245,
    options: [10, 15, 56]
  };
};

const drawTakeawayNumbers = level => {
  return {
    result: 245,
    options: [10, 15, 56]
  };
};

export const drawNumbers = (selectedOperator, level = 0) => {
  let giveNumber = () => {};
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
  return {
    type: STORE_DRAWN_NUMBERS,
    selectedOperator,
    ...giveNumbers()
  };
};
