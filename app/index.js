import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import Navigator from './config/routes';
import store from './config/store';

EStyleSheet.build({
  $primaryOrange: '#f08500',
  $primaryBlue: '#191970',
  $primaryBrown: '#5e2612',
  $primaryGreen: '#04582f',
  $primaryBlack: '#000'
  // outline: 1
});

export default () =>
  <Provider store={store}>
    <Navigator onNavigatorStateChange />
  </Provider>;
