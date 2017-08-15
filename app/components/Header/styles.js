import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  $textColor: 'yellow',
  $iconColor: 'white',
  $iconSize: 18,
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
    width: 80,
    paddingRight: 6,
    paddingLeft: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '$secondaryBlack'
  },
  iconContainer: {
    backgroundColor: '$secondaryGray',
    borderRadius: '$iconSize/2',
    width: '$iconSize',
    height: '$iconSize'
  },
  icon: {
    fontWeight: '700',
    backgroundColor: 'transparent'
  },
  scoreText: {
    color: '$textColor'
  }
});

export default styles;
