import React from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';

const ICON_COLOR = '#fff';
const ICON_SIZE = 48;

const Header = () =>
  <View style={styles.container}>
    <TouchableOpacity style={[styles.icon, styles.division]}>
      <MaterialCommunityIcons
        name={'division'}
        color={ICON_COLOR}
        size={ICON_SIZE}
      />
    </TouchableOpacity>
    <TouchableOpacity style={[styles.icon, styles.multiply]}>
      <MaterialCommunityIcons
        name={'close'}
        color={ICON_COLOR}
        size={ICON_SIZE}
      />
    </TouchableOpacity>
    <TouchableOpacity style={[styles.icon, styles.sum]}>
      <MaterialCommunityIcons
        name={'plus'}
        color={ICON_COLOR}
        size={ICON_SIZE}
      />
    </TouchableOpacity>
    <TouchableOpacity style={[styles.icon, styles.subtract]}>
      <MaterialCommunityIcons
        name={'minus'}
        color={ICON_COLOR}
        size={ICON_SIZE}
      />
    </TouchableOpacity>
  </View>;

export default Header;
