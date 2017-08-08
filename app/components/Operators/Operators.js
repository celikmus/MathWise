import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';

const getStyle = (operator, selectedOperator) => {
  const selectedStyle =
    selectedOperator === operator ? styles.selected : styles.notSelected;
  const style = [styles.icon, styles[operator], selectedStyle];
  return style;
};

const Operators = ({ selectedOperator, changeOperator }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => changeOperator('division')}
        activeOpacity={selectedOperator === 'division' ? 1 : 0.7}
        style={getStyle('division', selectedOperator)}
      >
        <MaterialCommunityIcons
          name={'division'}
          color={styles.$iconColor}
          size={styles.$iconSize}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => changeOperator('multiply')}
        activeOpacity={selectedOperator === 'multiply' ? 1 : 0.7}
        style={getStyle('multiply', selectedOperator)}
      >
        <MaterialCommunityIcons
          name={'close'}
          color={styles.$iconColor}
          size={styles.$iconSize}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => changeOperator('sum')}
        activeOpacity={selectedOperator === 'sum' ? 1 : 0.7}
        style={getStyle('sum', selectedOperator)}
      >
        <MaterialCommunityIcons
          name={'plus'}
          color={styles.$iconColor}
          size={styles.$iconSize}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => changeOperator('subtract')}
        activeOpacity={selectedOperator === 'subtract' ? 1 : 0.7}
        style={getStyle('subtract', selectedOperator)}
      >
        <MaterialCommunityIcons
          name={'minus'}
          color={styles.$iconColor}
          size={styles.$iconSize}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Operators;
