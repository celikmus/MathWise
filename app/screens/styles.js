import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
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
    // backgroundColor: 'transparent',
    width: '100%',
    height: 300,
    position: 'absolute',
    bottom: 54,
    borderWidth: 1,
    borderColor: 'black',
    zIndex: 2,
    flexDirection: 'row',
    flex: 1
  }
});

export default styles;