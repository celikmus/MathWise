import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';
import Navigator from './config/routes';
import store from './config/store';
import { viewPortHeight, viewPortWidth } from './config/screen';

EStyleSheet.build({
  $primaryOrange: '#f08500',
  $primaryBlue: '#191970',
  $primaryYellow: '#f2e745',
  $primaryBrown: '#5e2612',
  $secondaryBrown: '#a24a21',
  $primaryGreen: '#2ecb17',
  $secondaryGreen: '#9ce5e0',
  $primaryBlack: '#000',
  $secondaryBlack: '#212121',
  $primaryGray: '#aaa',
  $secondaryGray: '#737373',
  $primaryRed: '#7a0608',
  $secondaryRed: '#c20a0e',
  $layoutBackgroundColor: '#76c3fe',
  $headerBackground: '#0a2271',
  $boxBackground: '#123dc9',
  $boxDragBackground: '#0a2271',
  $dropContainerBackground: '#5987fb',
  $operatorsBackground: '#5987fb',
  $dropContainerHeight: Math.max(viewPortHeight, viewPortWidth) / 5,
  $dropZoneBuffer: viewPortWidth / 8,
  $boxSize: Math.min(viewPortHeight, viewPortWidth) / 5,
  $borderRadius: 4
  // outline: 1
});

export default () =>
  <Provider store={store}>
    <Navigator onNavigatorStateChange />
  </Provider>;
