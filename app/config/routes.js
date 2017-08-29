import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';
import Home from '../screens/Home';
import Settings from '../screens/Settings';

const SettingsStack = StackNavigator(
  {
    Settings: {
      screen: Settings
    }
  },
  {
    headerMode: 'none'
  }
);

const HomeStack = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null
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
    },
    Settings: {
      screen: SettingsStack
    }
  },
  {
    headerMode: 'screen'
  }
);
