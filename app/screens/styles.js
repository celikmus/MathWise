import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  $iconColor: '$primaryBlack',
  $iconSize: 40,
  container: {
    flex: 1
  },
  dropZone: {
    height: 64,
    width: 64,
    backgroundColor: '$primaryGray'
  },
  dropContainer: {
    height: 100,
    backgroundColor: 'red',
    position: 'absolute',
    top: 20,
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  draggableContainer: {
    width: '100%',
    height: 300,
    position: 'absolute',
    bottom: 54,
    borderWidth: 1,
    borderColor: 'black',
    zIndex: 2,
    flexDirection: 'row',
    flex: 1
  },
  result: {
    width: '$boxSize',
    height: '$boxSize',
    borderRadius: '$borderRadius',
    justifyContent: 'center',
    alignItems: 'center'
  },
  resultText: {
    fontWeight: '700',
    fontSize: 28
  }
});

export default styles;
