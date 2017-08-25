import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';
import Home from '../screens/Home';
import Settings from '../screens/Settings';

const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigatorOptions: {
        header: () => null,
        headerTitle: 'Home'
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        headerTitle: 'Settings'
      }
    }
  },
  {
    headerMode: 'none'
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
