import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import Navigator from './config/routes';
import store from './config/store';
import { viewPortHeight, viewPortWidth, boxCoordinates } from './config/screen';

EStyleSheet.build({
  $primaryOrange: '#f08500',
  $primaryBlue: '#191970',
  $primaryBrown: '#5e2612',
  $secondaryBrown: '#a24a21',
  $primaryGreen: '#04582f',
  $secondaryGreen: '#9ce5e0',
  $primaryBlack: '#000',
  $primaryGray: '#aaa',
  $dropContainerHeight: Math.max(viewPortHeight, viewPortWidth) / 5,
  $dropZoneBuffer: viewPortWidth / 10,
  $boxSize: Math.min(viewPortHeight, viewPortWidth) / 5,
  $borderRadius: 4
  // outline: 1
});

export default () =>
  <Provider store={store}>
    <Navigator onNavigatorStateChange />
  </Provider>;
