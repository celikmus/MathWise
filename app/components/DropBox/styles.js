import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  square: {
    width: 68,
    height: 68,
    borderColor: '$secondaryBrown',
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 12
  },
  filled: {
    backgroundColor: '$secondaryBrown'
  },
  filledText: {
    fontWeight: '700'
  }
});

export default styles;
