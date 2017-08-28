import EStyleSheet from 'react-native-extended-stylesheet';
import color from 'color';

const styles = EStyleSheet.create({
  square: {
    width: '$boxSize',
    height: '$boxSize',
    borderRadius: '$borderRadius',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: () =>
      color(EStyleSheet.value('$dropContainerBackground')).darken(0.2)
  },
  text: {
    color: '$primaryYellow',
    fontSize: 12
  }
});

export default styles;
