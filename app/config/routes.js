import { StackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';
import Home from '../screens/Home';
import Settings from '../screens/Settings';

export default StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null,
        headerMode: 'none'
      }
    },
    Settings: {
      screen: Settings
    }
  },
  {
    headerMode: 'screen'
  }
);
