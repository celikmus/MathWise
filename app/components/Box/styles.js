import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  $backgroundColor: '$primaryBrown',
  $draggingBackground: '$secondaryBrown',
  container: {
    flex: 1
  },
  square: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: 64,
    height: 64,
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
