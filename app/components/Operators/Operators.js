import React from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';

const ICON_COLOR = '#fff';
const ICON_SIZE = 48;

const getStyle = (operator, selectedOperator) => {
  const selectedStyle =
    selectedOperator === operator ? styles.selected : styles.notSelected;
  const style = [styles.icon, styles[operator], selectedStyle];
  return style;
};

const Operators = ({ selectedOperator = 'division' }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={selectedOperator === 'division' ? 1 : 0.2}
        style={getStyle('division', selectedOperator)}
      >
        <MaterialCommunityIcons
          name={'division'}
          color={ICON_COLOR}
          size={ICON_SIZE}
        />
      </TouchableOpacity>
      <TouchableOpacity style={getStyle('multiply', selectedOperator)}>
        <MaterialCommunityIcons
          name={'close'}
          color={ICON_COLOR}
          size={ICON_SIZE}
        />
      </TouchableOpacity>
      <TouchableOpacity style={getStyle('sum', selectedOperator)}>
        <MaterialCommunityIcons
          name={'plus'}
          color={ICON_COLOR}
          size={ICON_SIZE}
        />
      </TouchableOpacity>
      <TouchableOpacity style={getStyle('subtract', selectedOperator)}>
        <MaterialCommunityIcons
          name={'minus'}
          color={ICON_COLOR}
          size={ICON_SIZE}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Operators;
