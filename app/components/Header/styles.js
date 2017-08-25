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
    paddingRight: 10
  },
  scoreContainer: {
    height: 24,
    borderRadius: 12,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    paddingRight: 4,
    paddingLeft: 4,
    marginLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '$primaryGray'
  },
  passContainer: {
    height: 24,
    width: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
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
  },
  passText: {
    color: '$primaryRed',
    marginLeft: 5
  },
  settings: {
    marginLeft: 'auto'
  }
});

export default styles;
