import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { getIconName } from '../../utils/icons';
import styles from './styles';

const Header = ({ onPressSettings, score, passCount, selectedOperator }) =>
  <View style={styles.container}>
    <View
      style={[
        styles.scoreContainer,
        { width: score.toFixed().length * 12 + 30 }
      ]}
    >
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>
          <MaterialCommunityIcons
            name={getIconName(selectedOperator)}
            color={styles.$iconColor}
            size={styles.$iconSize}
          />
        </Text>
      </View>
      <Text style={styles.scoreText}>
        {score}
      </Text>
    </View>
    <View
      style={[
        styles.passContainer,
        { width: passCount.toFixed().length * 8 + 30 }
      ]}
    >
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>
          <MaterialCommunityIcons
            name={'arrow-top-right'}
            color={styles.$iconColor}
            size={styles.$iconSize}
          />
        </Text>
      </View>
      <Text style={styles.passText}>
        {passCount}
      </Text>
    </View>
    <TouchableOpacity style={styles.settings} onPress={onPressSettings}>
      <Text style={styles.icon}>
        <MaterialCommunityIcons
          name={'settings'}
          color={styles.$iconColor}
          size={styles.$iconSize}
        />
      </Text>
    </TouchableOpacity>
  </View>;

Header.propTypes = {
  score: PropTypes.number,
  passCount: PropTypes.number,
  selectedOperator: PropTypes.string,
  onPressSettings: PropTypes.func
};

const select = state => {
  const { selectedOperator } = state.interactions;
  return {
    selectedOperator,
    passCount: state.numbers.passCount[selectedOperator],
    score: state.numbers.scores[selectedOperator]
  };
};

export default connect(select)(Header);
