import React from 'react';
import { Text, StatusBar } from 'react-native';
import { Container } from '../components/Container';
import styles from './styles';

const Settings = () =>
  <Container>
    <StatusBar translucent={false} barStyle="default" />
    <Text>Settings page lala...</Text>
  </Container>;

Settings.navigationOptions = {
  headerTitle: 'Settings'
};

export default Settings;
