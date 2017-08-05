import EStyleSheet from 'react-native-extended-stylesheet';

const boxSize = 64;
const boxBufer = 30;

const styles = EStyleSheet.create({
  $backgroundColor: '$primaryBrown',
  $draggingBackground: '$secondaryBrown',
  $boxSize: 64,
  $boxBuffer: 20,
  container: {
    flex: 1
  },
  square: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '$boxSize',
    height: '$boxSize',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 12
  }
});

export default styles;
