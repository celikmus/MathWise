import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Operators } from '../components/Operators';
import { Box } from '../components/Box';
import { DropBox } from '../components/DropBox';
import styles from './styles';

const getIconName = operator => {
  switch (operator) {
    case 'multiply':
      return 'close';
    case 'sum':
      return 'plus';
    case 'subtract':
      return 'minus';
    default:
      return operator;
  }
};

class Home extends Component {
  render() {
    return (
      <Container backgroundColor={this.props.backgroundColor}>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header />
        <View style={styles.dropContainer}>
          <DropBox>
            <Text>Drop here!</Text>
          </DropBox>
          <MaterialCommunityIcons
            name={getIconName(this.props.selectedOperator)}
            color={styles.$iconColor}
            size={styles.$iconSize}
          />
          <DropBox>
            <Text>Drop here!</Text>
          </DropBox>
          <MaterialCommunityIcons
            name={getIconName('equal')}
            color={styles.$iconColor}
            size={styles.$iconSize}
          />
          <View style={styles.result}>
            <Text style={styles.resultText}>245</Text>
          </View>
        </View>
        <View style={styles.draggableContainer}>
          <Box value={20} />
          <Box value={15} />
        </View>
        <Operators />
      </Container>
    );
  }
}

const select = state => ({
  selectedOperator: state.interactions.selectedOperator
});

export default connect(select)(Home);
