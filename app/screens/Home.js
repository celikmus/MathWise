import React, { Component } from 'react';
import { View, Text, StatusBar, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Operators } from '../components/Operators';
import { Box } from '../components/Box';
import { DropBox } from '../components/DropBox';
import {
  restartGame,
  endRestart,
  changeOperator
} from '../actions/interactions';
import { operators } from '../utils/numbers';
import styles from './styles';

const getIconName = operator => {
  switch (operator) {
    case operators.multiply:
      return 'close';
    case operators.sum:
      return 'plus';
    case operators.subtract:
      return 'minus';
    default:
      return operator;
  }
};

class Home extends Component {
  constructor() {
    super();
    this.handleChangeOperator = this.handleChangeOperator.bind(this);
    Dimensions.addEventListener('change', () => {
      this.props.dispatch(restartGame());
    });
  }

  static propTypes = {
    selectedOperator: PropTypes.string,
    total: PropTypes.number,
    result: PropTypes.number,
    options: PropTypes.array,
    dispatch: PropTypes.func.isRequired,
    restarting: PropTypes.bool.isRequired
  };

  handleChangeOperator(selectedOperator) {
    const { dispatch } = this.props;
    dispatch(restartGame(selectedOperator));
  }

  componentDidUpdate() {
    const { dispatch, restarting } = this.props;
    restarting && dispatch(endRestart());
  }
  renderOptions() {
    const options = this.props.options.map((option, i) =>
      <Box key={i} boxId={i} value={option} />
    );
    return options;
  }
  renderSuccess() {
    const { selectedOperator, dispatch } = this.props;
    setTimeout(() => {
      dispatch(restartGame(selectedOperator));
    }, 1000);
    return <Text>Success!</Text>;
  }
  renderFail() {
    return <Text>Incorrect!</Text>;
  }
  render() {
    return (
      <Container backgroundColor={this.props.backgroundColor}>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header />
        <View style={styles.container}>
          <View style={styles.dropContainer}>
            <DropBox>
              <Text>Drop here!</Text>
            </DropBox>
            <View style={styles.operator}>
              <MaterialCommunityIcons
                name={getIconName(this.props.selectedOperator)}
                color={styles.$iconColor}
                size={styles.$iconSize}
              />
            </View>
            <DropBox>
              <Text>Drop here!</Text>
            </DropBox>
            <View style={styles.operator}>
              <MaterialCommunityIcons
                name={getIconName(operators.equal)}
                color={styles.$iconColor}
                size={styles.$iconSize}
              />
            </View>
            <View style={styles.result}>
              <Text style={styles.resultText}>
                {this.props.result}
              </Text>
            </View>
          </View>
          {this.props.isFilled &&
            <View style={styles.message}>
              {this.props.result === this.props.total
                ? this.renderSuccess()
                : this.renderFail()}
            </View>}
          {this.renderOptions()}
        </View>
        <Operators
          selectedOperator={this.props.selectedOperator}
          changeOperator={o => this.handleChangeOperator(o)}
        />
      </Container>
    );
  }
}

const calculateTotal = (dropZones, operator) => {
  switch (operator) {
    case operators.sum:
      return dropZones.reduce((sum, zone) => sum + (zone.value || 0), 0);
    case operators.subtract:
      return dropZones[1].value - dropZones[0].value;
    default:
      return 0;
  }
};

const select = state => {
  const {
    selectedOperator,
    dropZones,
    dropCount,
    restarting
  } = state.interactions;
  const { result, options } = state.numbers;
  const zoneCount = dropZones.length;
  const isFilled = zoneCount === dropCount;
  const total = isFilled ? calculateTotal(dropZones, selectedOperator) : 0;
  return {
    result,
    options,
    selectedOperator: selectedOperator || 'sum',
    isFilled,
    total,
    restarting
  };
};

export default connect(select)(Home);
