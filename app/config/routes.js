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
    headerMode: 'screen',
    cardStyle: { paddingTop: StatusBar.currentHeight }
  }
);

export default StackNavigator(
  {
    Home: {
      screen: Home,
      navigatorOptions: {
        header: () => null
      }
    },
    Settings: {
      screen: SettingsStack
    }
  },
  {
    headerMode: 'none'
  }
);
