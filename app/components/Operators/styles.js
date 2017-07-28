import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  $underlayColor: '$primaryGray',
  $iconColor: '#fff',
  $iconSize: 48,
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
    backgroundColor: '$primaryGreen'
  },
  notSelected: {
    backgroundColor: '$primaryGray'
  }
});

export default styles;
