import EStyleSheet from 'react-native-extended-stylesheet';

const boxSize = 64;
const boxBufer = 30;

const styles = EStyleSheet.create({
  $backgroundColor: '$primaryBrown',
  $draggingBackground: '$secondaryBrown',
  $boxSize: 64,
  $boxBuffer: 20,
  $initialTop: 0,
  $initialLeft: 0,
  $borderRadius: 4,
  square: {
    width: '$boxSize',
    height: '$boxSize',
    borderRadius: '$borderRadius',
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptySquare: {
    width: '$boxSize',
    height: '$boxSize',
    backgroundColor: 'yellow',
    top: '$initialTop',
    left: '$initialLeft',
    borderRadius: '$borderRadius'
  },
  text: {
    color: 'white',
    fontSize: 12
  }
});

export default styles;