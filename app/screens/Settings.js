import React from 'react';
import { ScrollView, Text, TouchableHighlight, StatusBar } from 'react-native';

const Settings = () =>
  <ScrollView>
    <StatusBar translucent={true} barStyle="default" />
    <Text>Settings page lala...</Text>
  </ScrollView>;

Settings.navigationOptions = {
  headerTitle: 'Settings'
};

export default Settings;
