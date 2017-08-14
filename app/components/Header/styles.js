import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    position: 'absolute',
    top: 20,
    right: 0,
    left: 0,
    height: 30,
    backgroundColor: '$secondaryGray',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 10
  },
  score: {
    height: 24,
    borderRadius: 12,
    width: 50,
    paddingRight: 6,
    paddingLeft: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '$secondaryBlack'
  },
  scoreText: {
    color: 'yellow'
  }
});

export default styles;
