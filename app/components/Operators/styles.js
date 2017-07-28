import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80
  },
  division: {
    backgroundColor: '$primaryBlue'
  },
  multiply: {
    backgroundColor: '$primaryBlack'
  },
  sum: {
    backgroundColor: '$primaryGreen'
  },
  subtract: {
    backgroundColor: '$primaryBrown'
  },
  selected: {
    backgroundColor: 'red'
  },
  notSelected: {
    backgroundColor: 'gray'
  }
});

export default styles;
