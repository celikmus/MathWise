import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { operators } from '../../utils/numbers';
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
        onPress={() => changeOperator(operators.division)}
        activeOpacity={selectedOperator === operators.division ? 1 : 0.7}
        style={getStyle(operators.division, selectedOperator)}
      >
        <MaterialCommunityIcons
          name={operators.division}
          color={styles.$iconColor}
          size={styles.$iconSize}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => changeOperator(operators.multiply)}
        activeOpacity={selectedOperator === operators.multiply ? 1 : 0.7}
        style={getStyle(operators.multiply, selectedOperator)}
      >
        <MaterialCommunityIcons
          name={'close'}
          color={styles.$iconColor}
          size={styles.$iconSize}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => changeOperator(operators.sum)}
        activeOpacity={selectedOperator === operators.sum ? 1 : 0.7}
        style={getStyle(operators.sum, selectedOperator)}
      >
        <MaterialCommunityIcons
          name={'plus'}
          color={styles.$iconColor}
          size={styles.$iconSize}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => changeOperator(operators.subtract)}
        activeOpacity={selectedOperator === operators.subtract ? 1 : 0.7}
        style={getStyle(operators.subtract, selectedOperator)}
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
