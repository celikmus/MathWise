import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

const Header = ({ score, selectedOperator }) =>
  <View style={styles.container}>
    <View style={styles.score}>
      <Text style={styles.scoreText}>
        {score}
      </Text>
    </View>
  </View>;

Header.propTypes = {
  score: PropTypes.number
};

const select = state => {
  const selectedOperator = state.interactions.selectedOperator;
  return {
    selectedOperator,
    score: state.numbers.scores[selectedOperator]
  };
};

export default connect(select)(Header);
