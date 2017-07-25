import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';
import Home from '../screens/Home';

const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigatorOptions: {
        header: () => null,
        headerTitle: 'Home'
      }
    }
  },
  {
    headerMode: 'screen'
  }
);

export default StackNavigator(
  {
    Home: {
      screen: HomeStack
    }
  },
  {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight },
    headerMode: 'none'
  }
);
