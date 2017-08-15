import { operators } from './numbers';

const getIconName = operator => {
  switch (operator) {
    case operators.multiply:
      return 'close';
    case operators.sum:
      return 'plus';
    case operators.subtract:
      return 'minus';
    default:
      return operator;
  }
};

export { getIconName };
