import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  $iconColor: 'white',
  $iconColorSelected: '$primaryYellow',
  $inactiveOpacity: 0.5,
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
  selected: {
    backgroundColor: '$primaryRed'
  },
  notSelected: {
    backgroundColor: '$operatorsBackground'
  }
});

export default styles;
