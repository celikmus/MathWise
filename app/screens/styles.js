import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  $iconColor: 'white',
  $iconSize: 28,
  container: {
    width: '100%',
    height: '100% - 54',
    position: 'absolute',
    bottom: 54,
    top: 50,
    flex: 1
  },
  dropContainer: {
    height: '$dropContainerHeight',
    backgroundColor: '$dropContainerBackground',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  operator: {
    width: 42,
    alignItems: 'center'
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
    fontSize: 28,
    color: 'white'
  },
  message: {
    position: 'absolute',
    top: '$dropContainerHeight',
    width: '100%',
    padding: 10,
    alignItems: 'center'
  }
});

export default styles;
