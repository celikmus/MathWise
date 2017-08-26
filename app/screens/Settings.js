import React from 'react';
import { View, Text, StatusBar } from 'react-native';

const Settings = () =>
  <View>
    <StatusBar translucent={false} barStyle="default" />
    <Text>Settings page lala...</Text>
  </View>;

Settings.navigationOptions = {
  title: 'Settings'
};

export default Settings;
