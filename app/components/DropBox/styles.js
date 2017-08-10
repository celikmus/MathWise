import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  square: {
    width: '$boxSize',
    height: '$boxSize',
    borderColor: '$secondaryBrown',
    borderWidth: 1,
    borderRadius: '$borderRadius',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontSize: 12
  }
});

export default styles;
