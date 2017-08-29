import React, { Component } from 'react';
import { View, Text, StatusBar, Animated } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Operators } from '../components/Operators';
import { Box } from '../components/Box';
import { DropBox } from '../components/DropBox';
import color from 'color';
import {
  restartGame,
  endRestart,
  switchOperator
} from '../actions/interactions';
import {
  incrementScore,
  decrementScore,
  tickPassCount
} from '../actions/numbers';
import { operators } from '../utils/numbers';
import { getIconName } from '../utils/icons';
import styles from './styles';

class Home extends Component {
  constructor() {
    super();
    this.handleChangeOperator = this.handleChangeOperator.bind(this);
    this.handlePressSettings = this.handlePressSettings.bind(this);
    this.animationHeight = new Animated.Value(0);
  }

  static propTypes = {
    selectedOperator: PropTypes.string,
    total: PropTypes.number,
    result: PropTypes.number,
    options: PropTypes.array,
    dispatch: PropTypes.func.isRequired,
    restarting: PropTypes.bool.isRequired,
    passCount: PropTypes.number
  };

  handleChangeOperator(pressedOperator) {
    const { dispatch, selectedOperator } = this.props;
    if (selectedOperator === pressedOperator) {
      dispatch(tickPassCount(selectedOperator));
      dispatch(decrementScore(pressedOperator));
      dispatch(restartGame(pressedOperator));
    } else {
      dispatch(switchOperator(pressedOperator));
    }
  }

  handlePressSettings() {
    this.props.navigation.navigate('Settings');
  }

  componentWillUpdate(nextProps) {
    const { selectedOperator, dispatch, total, result, isFilled } = nextProps;
    const isSuccess = total === result;
    const isFailed = isFilled && total !== result;
    if (isSuccess) {
      dispatch(incrementScore(selectedOperator));
      setTimeout(() => {
        dispatch(restartGame(selectedOperator));
      }, 1000);
    } else if (isFailed) {
      dispatch(decrementScore(selectedOperator));
    }
  }

  componentDidUpdate() {
    const { dispatch, restarting } = this.props;
    restarting && dispatch(endRestart());
  }
  renderOptions() {
    const { options, selectedOperator } = this.props;
    const currentOptions = options.map((option, i) =>
      <Box key={i} boxId={i} value={option} />
    );
    return currentOptions;
  }
  renderSuccess() {
    return (
      <Animated.View
        style={[styles.successBlock, { height: this.animationHeight }]}
      >
        <Text style={styles.successText}>Well done!</Text>
      </Animated.View>
    );
  }
  renderFail() {
    return (
      !!this.props.total &&
      <View style={styles.failBlock}>
        <Text>Try again.</Text>
      </View>
    );
  }
  render() {
    const { isFilled, result, total, selectedOperator } = this.props;
    const isCorrect = isFilled && result === total;
    isCorrect &&
      Animated.timing(this.animationHeight, {
        toValue: 1500,
        duration: 800
      }).start();
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPressSettings={this.handlePressSettings} />
        <View style={styles.container}>
          <View style={styles.dropContainer}>
            <DropBox zoneId={0}>
              <Text>Drop here!</Text>
            </DropBox>
            <View style={styles.operator}>
              <MaterialCommunityIcons
                name={getIconName(selectedOperator)}
                color={styles.$iconColor}
                size={styles.$iconSize}
              />
            </View>
            <DropBox zoneId={1}>
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
                {result}
              </Text>
            </View>
          </View>
          {isFilled &&
            <View style={styles.message}>
              {isCorrect ? this.renderSuccess() : this.renderFail()}
            </View>}
          {this.renderOptions()}
        </View>
        <Operators
          selectedOperator={selectedOperator}
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
      const subValue1 = dropZones.filter(z => z.zoneId === 0)[0].value;
      const subValue2 = dropZones.filter(z => z.zoneId === 1)[0].value;
      return subValue1 - subValue2;
    case operators.multiply:
      return dropZones.reduce((sum, zone) => sum * (zone.value || 0), 1);
    case operators.division:
      const divValue1 = dropZones.filter(z => z.zoneId === 0)[0].value;
      const divValue2 = dropZones.filter(z => z.zoneId === 1)[0].value;
      return divValue1 / divValue2;
    default:
      return 0;
  }
};

const select = state => {
  const {
    selectedOperator = 'sum',
    dropZones,
    restarting
  } = state.interactions;
  const { result, options, passCount } = state.numbers;
  const isFilled = dropZones.every(
    z => z.boxId !== undefined && z.boxId !== null
  );
  const total = isFilled ? calculateTotal(dropZones, selectedOperator) : 0;
  return {
    result: result[selectedOperator],
    options: options[selectedOperator],
    passCount: passCount[selectedOperator],
    selectedOperator,
    isFilled,
    total,
    restarting
  };
};

export default connect(select)(Home);
