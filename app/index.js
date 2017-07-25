import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import Navigator from './config/routes';
import store from './config/store';

EStyleSheet.build({
  $primaryBlue: '#4f6d7a'
});

export default () =>
  <Provider store={store}>
    <Navigator onNavigatorStateChange />
  </Provider>;
