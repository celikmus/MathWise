import EStyleSheet from 'react-native-extended-stylesheet';
import color from 'color';

const styles = EStyleSheet.create({
  $backgroundColor: '$boxBackground',
  $draggingBackground: '$boxDragBackground',
  $containerHeight: '$dropContainerHeight',
  $boxBuffer: '$dropZoneBuffer',
  $initialTop: 0,
  $initialLeft: 0,
  square: {
    position: 'absolute',
    width: '$boxSize',
    height: '$boxSize',
    borderRadius: '$borderRadius',
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptySquare: {
    width: '$boxSize',
    height: '$boxSize',
    backgroundColor: () =>
      color(EStyleSheet.value('$layoutBackgroundColor')).darken(0.1),
    borderRadius: '$borderRadius',
    position: 'absolute'
  },
  text: {
    color: 'white',
    fontSize: '$boxSize/4',
    fontWeight: '700'
  }
});

export default styles;
