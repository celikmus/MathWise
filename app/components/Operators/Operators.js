import React from 'react';
import { View, TouchableOpacity } from 'react-native';
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
        activeOpacity={
          selectedOperator === operators.division ? 1 : styles.$inactiveOpacity
        }
        style={getStyle(operators.division, selectedOperator)}
      >
        <MaterialCommunityIcons
          name={operators.division}
          color={
            selectedOperator === operators.division
              ? styles.$iconColorSelected
              : styles.$iconColor
          }
          size={styles.$iconSize}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => changeOperator(operators.multiply)}
        activeOpacity={
          selectedOperator === operators.multiply ? 1 : styles.$inactiveOpacity
        }
        style={getStyle(operators.multiply, selectedOperator)}
      >
        <MaterialCommunityIcons
          name={'close'}
          color={
            selectedOperator === operators.multiply
              ? styles.$iconColorSelected
              : styles.$iconColor
          }
          size={styles.$iconSize}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => changeOperator(operators.sum)}
        activeOpacity={
          selectedOperator === operators.sum ? 1 : styles.$inactiveOpacity
        }
        style={getStyle(operators.sum, selectedOperator)}
      >
        <MaterialCommunityIcons
          name={'plus'}
          color={
            selectedOperator === operators.sum
              ? styles.$iconColorSelected
              : styles.$iconColor
          }
          size={styles.$iconSize}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => changeOperator(operators.subtract)}
        activeOpacity={
          selectedOperator === operators.subtract ? 1 : styles.$inactiveOpacity
        }
        style={getStyle(operators.subtract, selectedOperator)}
      >
        <MaterialCommunityIcons
          name={'minus'}
          color={
            selectedOperator === operators.subtract
              ? styles.$iconColorSelected
              : styles.$iconColor
          }
          size={styles.$iconSize}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Operators;
