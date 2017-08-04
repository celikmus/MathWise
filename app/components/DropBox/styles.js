import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  square: {
    width: 164,
    height: 164,
    borderColor: '$secondaryBrown',
    borderWidth: 1,
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
