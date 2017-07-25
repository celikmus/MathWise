import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles';

const Container = ({ children, backgroundColor }) => {
  const containerStyles = [styles.backgroundColor];
  if (backgroundColor) {
    containerStyles.push({ backgroundColor });
  }
  return (
    <View style={containerStyles}>
      {children}
    </View>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string
};

export default Container;
